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
  readonly protected?: boolean
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
    default: _default,
    alias,
    protected: _protected,
  } = declaration

  const internalKey = Symbol.for(String(key))

  const getDefaultValue = (): any => typeof _default === 'function'
    ? _default()
    : _default

  const descriptor = Object.getOwnPropertyDescriptor(constructor.prototype, key)
    || {
      get(this: Definable) {
        if (alias && alias !== key) {
          if (typeof alias === 'string') {
            return getObjectValueByPath(this as any, alias)
          }
          else {
            return (this as any)[alias]
          }
        }
        else {
          if (!_protected && typeof key === 'string' && this.offsetGet) {
            return this.offsetGet(key)
          }
          else {
            return (this as any)[internalKey]
          }
        }
      },
      set(this: Definable, value: unknown) {
        if (alias && alias !== key) {
          if (typeof alias === 'string') {
            setObjectValueByPath(this as any, alias, value)
          }
          else {
            (this as any)[alias] = value
          }
        }
        else {
          if (!_protected && typeof key === 'string' && this.offsetSet) {
            this.offsetSet(key, value)
          }
          else {
            (this as any)[internalKey] = value
          }
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

export function protectedProperty(options?: Omit<PropertyDeclaration, 'protected'>): PropertyDecorator {
  return property({ ...options, protected: true })
}
