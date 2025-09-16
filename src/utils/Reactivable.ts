import type { PropertyAccessor, PropertyDeclaration } from '../decorators'
import { getDeclarations } from '../decorators'
import { Observable } from './Observable'

export interface ReactivableEvents {
  updateProperty: (key: string, newValue: any, oldValue: any) => void
}

export class Reactivable extends Observable<ReactivableEvents> implements PropertyAccessor {
  protected _propertyAccessor?: PropertyAccessor
  protected _properties = new Map<string, unknown>()

  getProperty(key: string, defaultValue?: any): any {
    if (this._propertyAccessor?.getProperty) {
      return this._propertyAccessor.getProperty(key, defaultValue)
    }
    else {
      return this._properties.get(key) ?? defaultValue
    }
  }

  setProperty(key: string, newValue: any): void {
    // @ts-expect-error ignore
    const oldValue = this[key]
    if (Object.is(newValue, oldValue)) {
      return
    }
    if (this._propertyAccessor?.setProperty) {
      this._propertyAccessor.setProperty(key, newValue)
    }
    else {
      this._properties.set(key, newValue)
    }
    this.onUpdateProperty(key, newValue, oldValue)
  }

  getPropertyDeclarations(): Map<string, PropertyDeclaration> {
    return getDeclarations(this.constructor)
  }

  setPropertyAccessor(accessor: PropertyAccessor): this {
    this._propertyAccessor = accessor

    this.getPropertyDeclarations().forEach((_declaration, key) => {
      // @ts-expect-error ignore
      const newValue = this[key]
      const oldValue = this._properties.get(key)
      if (newValue === undefined) {
        if (oldValue !== undefined) {
          // @ts-expect-error ignore
          this[key] = oldValue
        }
      }
      else if (newValue !== oldValue) {
        // @ts-expect-error ignore
        this[key] = newValue
      }
    })

    return this
  }

  onUpdateProperty(key: string, newValue: any, oldValue: any): void {
    this._updateProperty(key, newValue, oldValue)
    this.emit('updateProperty', key, newValue, oldValue)
  }

  // eslint-disable-next-line unused-imports/no-unused-vars
  protected _updateProperty(key: string, newValue: any, oldValue: any): void {
    /** override */
  }
}
