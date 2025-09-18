import type { PropertyAccessor, PropertyDeclaration } from '../decorators'
import type { ObservableEvents } from './Observable'
import { getDeclarations } from '../decorators'
import { Observable } from './Observable'

export interface ReactivableEvents extends ObservableEvents {
  updateProperty: (key: string, newValue: any, oldValue: any) => void
}

export interface Reactivable {
  on: <K extends keyof ReactivableEvents & string>(event: K, listener: ReactivableEvents[K]) => this
  once: <K extends keyof ReactivableEvents & string>(event: K, listener: ReactivableEvents[K]) => this
  off: <K extends keyof ReactivableEvents & string>(event: K, listener: ReactivableEvents[K]) => this
  emit: <K extends keyof ReactivableEvents & string>(event: K, ...args: Parameters<ReactivableEvents[K]>) => this
}

export class Reactivable extends Observable implements PropertyAccessor {
  protected _propertyAccessor?: PropertyAccessor
  protected _properties = new Map<string, unknown>()
  protected _updatedProperties = new Map<string, unknown>()
  protected _changedProperties = new Set<string>()
  protected _updatingPromise = Promise.resolve()
  protected _updating = false

  constructor(properties?: Record<string, any>) {
    super()
    this.setProperties(properties)
  }

  isDirty(key?: string): boolean {
    return key
      ? this._updatedProperties.has(key)
      : this._updatedProperties.size > 0
  }

  offsetGet(key: string): any {
    // @ts-expect-error ignore
    return this[key]
  }

  offsetSet(key: string, newValue: any): void {
    // @ts-expect-error ignore
    this[key] = newValue
  }

  getProperty(key: string, defaultValue?: any): any {
    if (this._propertyAccessor?.getProperty) {
      return this._propertyAccessor.getProperty(key, defaultValue)
    }
    else {
      return this._properties.get(key) ?? defaultValue
    }
  }

  setProperty(key: string, newValue: any): void {
    this._propertyAccessor?.setProperty?.(key, newValue)
    this._properties.set(key, newValue)
  }

  getProperties(keys?: string[]): Record<string, any> {
    const properties: Record<string, any> = {}
    for (const [name, property] of this.getPropertyDeclarations()) {
      if (!property.internal && !property.alias && (!keys || keys.includes(name))) {
        properties[name] = this.getProperty(name)
      }
    }
    return properties
  }

  setProperties(properties?: Record<string, any>): this {
    if (properties && typeof properties === 'object') {
      for (const [name] of this.getPropertyDeclarations()) {
        if (name in properties) {
          this.offsetSet(name, properties[name])
        }
      }
    }
    return this
  }

  resetProperties(): this {
    for (const [name, property] of this.getPropertyDeclarations()) {
      this.offsetSet(
        name,
        typeof property.default === 'function'
          ? property.default()
          : property.default,
      )
    }
    return this
  }

  getPropertyDeclarations(): Map<string, PropertyDeclaration> {
    return getDeclarations(this.constructor)
  }

  getPropertyDeclaration(key: string): PropertyDeclaration | undefined {
    return this.getPropertyDeclarations().get(key)
  }

  setPropertyAccessor(accessor: PropertyAccessor): this {
    this._propertyAccessor = accessor

    this.getPropertyDeclarations().forEach((declaration, key) => {
      if (!accessor.getProperty
        || declaration.internal
        || (declaration.alias && declaration.alias !== key)) {
        return
      }
      let newValue = accessor.getProperty(key)
      let oldValue = this._properties.get(key)
      if (newValue === undefined && oldValue !== undefined) {
        newValue = oldValue
        oldValue = undefined
      }
      if (!Object.is(newValue, oldValue)) {
        this.offsetSet(key, newValue)
        this.requestUpdate(key, newValue, oldValue)
      }
    })

    return this
  }

  protected async _nextTick(): Promise<void> {
    if ('requestAnimationFrame' in globalThis) {
      return new Promise(r => (globalThis as any).requestAnimationFrame(r))
    }
    return Promise.resolve()
  }

  protected async _enqueueUpdate(): Promise<void> {
    this._updating = true
    try {
      await this._updatingPromise
    }
    catch (e) {
      Promise.reject(e)
    }
    await this._nextTick()
    if (!this._updating)
      return
    this.onUpdate()
    this._updating = false
  }

  onUpdate(): void {
    this._update(this._updatedProperties)
    this._updatedProperties = new Map()
  }

  onUpdateProperty(key: string, newValue: any, oldValue: any): void {
    if (!Object.is(newValue, oldValue)) {
      this.requestUpdate(key, newValue, oldValue)
    }
  }

  requestUpdate(key?: string, newValue?: any, oldValue?: any): void {
    if (key !== undefined) {
      this._updatedProperties.set(key, oldValue)
      this._changedProperties.add(key)
      this._updateProperty(key, newValue, oldValue)
      this.emit('updateProperty', key, newValue, oldValue)
    }

    if (!this._updating) {
      this._updatingPromise = this._enqueueUpdate()
    }
  }

  // eslint-disable-next-line unused-imports/no-unused-vars
  protected _update(changed: Map<string, any>): void {
    /** override */
  }

  // eslint-disable-next-line unused-imports/no-unused-vars
  protected _updateProperty(key: string, newValue: any, oldValue: any): void {
    /** override */
  }

  toJSON(): Record<string, any> {
    const json: Record<string, any> = {}
    this._properties.forEach((value, key) => {
      if (value === undefined) {
        return
      }
      if (value && typeof value === 'object') {
        if ('toJSON' in value && typeof value.toJSON === 'function') {
          json[key] = value.toJSON()
        }
        else if (Array.isArray(value)) {
          json[key] = [...value]
        }
        else {
          json[key] = { ...value }
        }
      }
      else {
        json[key] = value
      }
    })
    return json
  }

  clone(): this {
    return new (this.constructor as any)(this.toJSON())
  }
}
