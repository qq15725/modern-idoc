import type { PropertyAccessor, PropertyDeclaration } from '../decorators'
import type { ObservableEvents } from './Observable'
import { getDeclarations, propertyOffsetFallback, propertyOffsetGet, propertyOffsetSet } from '../decorators'
import { Observable } from './Observable'

export interface ReactivableEvents extends ObservableEvents {
  updateProperty: [key: string, newValue: any, oldValue: any]
  destroy: []
}

export interface Reactivable {
  on: <K extends keyof ReactivableEvents & string>(event: K, listener: (...args: ReactivableEvents[K]) => void) => this
  once: <K extends keyof ReactivableEvents & string>(event: K, listener: (...args: ReactivableEvents[K]) => void) => this
  off: <K extends keyof ReactivableEvents & string>(event: K, listener: (...args: ReactivableEvents[K]) => void) => this
  emit: <K extends keyof ReactivableEvents & string>(event: K, ...args: ReactivableEvents[K]) => this
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

  getProperty(key: string): any {
    const declaration = this.getPropertyDeclaration(key)

    if (declaration) {
      if (declaration.internal || declaration.alias) {
        return propertyOffsetGet(this, key, declaration)
      }
      else {
        const getProperty = this._propertyAccessor?.getProperty

        let result
        if (getProperty) {
          result = getProperty(key)
        }
        else {
          result = this._properties.get(key)
        }

        return result ?? propertyOffsetFallback(this, key, declaration)
      }
    }

    return undefined
  }

  setProperty(key: string, newValue: any): void {
    const declaration = this.getPropertyDeclaration(key)

    if (declaration) {
      if (declaration.internal || declaration.alias) {
        propertyOffsetSet(this, key, newValue, declaration)
      }
      else {
        const oldValue = this.getProperty(key)
        this._propertyAccessor?.setProperty?.(key, newValue)
        this._properties.set(key, newValue)
        this.onUpdateProperty?.(
          key,
          newValue ?? propertyOffsetFallback(this, key, declaration),
          oldValue,
        )
      }
    }
  }

  getProperties(keys?: string[]): Record<string, any> {
    const properties: Record<string, any> = {}
    for (const [name, declaration] of this.getPropertyDeclarations()) {
      if (!declaration.internal && !declaration.alias && (!keys || keys.includes(name))) {
        properties[name] = this.getProperty(name)
      }
    }
    return properties
  }

  setProperties(properties?: Record<string, any>): this {
    if (properties && typeof properties === 'object') {
      for (const name in properties) {
        this.setProperty(name, properties[name])
      }
    }
    return this
  }

  resetProperties(): this {
    for (const [name, declaration] of this.getPropertyDeclarations()) {
      this.setProperty(
        name,
        typeof declaration.default === 'function'
          ? declaration.default()
          : declaration.default,
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
    const declarations = this.getPropertyDeclarations()

    this._propertyAccessor = undefined

    const oldValues: Record<string, any> = {}
    declarations.forEach((_declaration, key) => {
      oldValues[key] = this.getProperty(key)
    })

    this._propertyAccessor = accessor

    declarations.forEach((declaration, key) => {
      const newValue = this.getProperty(key)
      const oldValue = oldValues[key]
      if (newValue !== undefined && !Object.is(newValue, oldValue)) {
        this.setProperty(key, newValue)
        if (!declaration.internal && !declaration.alias) {
          this.requestUpdate(key, newValue, oldValue)
        }
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

  override destroy(): void {
    this.emit('destroy')
    super.destroy()
  }
}
