import { RawWeakMap } from './RawWeakMap'

export interface Definable {
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
  readonly alias?: string
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
    alias = Symbol.for(String(key)),
  } = declaration

  const getDefaultValue = (): any => typeof defaultValue === 'function'
    ? defaultValue()
    : defaultValue

  const descriptor = Object.getOwnPropertyDescriptor(constructor.prototype, key)
    || {
      get(this: Definable) { return (this as any)[alias] },
      set(this: Definable, v: unknown) { (this as any)[alias] = v },
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
