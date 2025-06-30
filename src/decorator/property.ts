import { getObjectValueByPath, RawWeakMap, setObjectValueByPath } from '../utils'

export interface Definable {
  offsetGet?: (key: string) => any
  offsetSet?: (key: string, value: any) => void
  requestUpdate?: (
    key: PropertyKey,
    newValue: unknown,
    oldValue: unknown,
    declaration: PropertyDeclaration
  ) => void
}

export interface PropertyDeclaration {
  readonly [key: string]: any
  readonly default?: any | (() => any)
  readonly alias?: string | symbol
}

const declarationMap = new RawWeakMap<object, Map<PropertyKey, PropertyDeclaration>>()
export function getDeclarations(constructor: any): Map<PropertyKey, PropertyDeclaration> {
  let declarations = declarationMap.get(constructor)
  if (!declarations) {
    const superConstructor = Object.getPrototypeOf(constructor)
    declarations = new Map(superConstructor ? getDeclarations(superConstructor) : undefined)
    declarationMap.set(constructor, declarations)
  }
  return declarations
}

export function defineProperty(constructor: any, key: PropertyKey, declaration: PropertyDeclaration = {}): void {
  getDeclarations(constructor).set(key, declaration)

  const {
    default: defaultValue,
    alias = key,
  } = declaration

  const _alias = alias === key
    ? Symbol.for(String(alias))
    : alias

  const getDefaultValue = (): any => typeof defaultValue === 'function'
    ? defaultValue()
    : defaultValue

  const descriptor = Object.getOwnPropertyDescriptor(constructor.prototype, key)
    || {
      get(this: Definable) {
        if (typeof _alias === 'string') {
          return this.offsetGet
            ? this.offsetGet(_alias)
            : getObjectValueByPath(this as any, _alias)
        }
        else {
          return (this as any)[_alias]
        }
      },
      set(this: Definable, value: unknown) {
        if (typeof _alias === 'string') {
          if (this.offsetSet) {
            this.offsetSet(_alias, value)
          }
          setObjectValueByPath(this as any, _alias, value)
        }
        else {
          (this as any)[_alias] = value
        }
      },
    }

  Object.defineProperty(constructor.prototype, key, {
    get(this: Definable) {
      let value = descriptor.get?.call(this)
      if (value === undefined) {
        value = getDefaultValue()
        if (value !== undefined) {
          descriptor.set?.call(this, value)
        }
      }
      return value
    },
    set(this: Definable, newValue: unknown) {
      let oldValue = descriptor.get?.call(this)
      if (oldValue === undefined) {
        oldValue = getDefaultValue()
      }
      descriptor.set?.call(this, newValue)
      this.requestUpdate?.(key, newValue, oldValue, declaration)
    },
    configurable: true,
    enumerable: true,
  })
}

export function property(options?: PropertyDeclaration): PropertyDecorator {
  return function (proto: any, name: any) {
    defineProperty(proto.constructor, name, options)
  }
}
