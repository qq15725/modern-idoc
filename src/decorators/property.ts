import { getObjectValueByPath, setObjectValueByPath } from '../utils'

export interface PropertyDeclaration {
  [key: string]: unknown
  default?: unknown | (() => unknown)
  fallback?: unknown | (() => unknown)
  alias?: string
  internal?: boolean
}

export interface PropertyAccessor {
  getProperty?: (key: string, defaultValue?: any) => any
  setProperty?: (key: string, newValue: any) => void
  onUpdateProperty?: (key: string, newValue: any, oldValue: any) => void
}

const propertiesSymbol = Symbol('properties')
const initedSymbol = Symbol('inited')

export function getDeclarations(constructor: any): Map<string, PropertyDeclaration> {
  let declarations
  if (Object.hasOwn(constructor, propertiesSymbol)) {
    declarations = constructor[propertiesSymbol]
  }
  else {
    const superConstructor = Object.getPrototypeOf(constructor)
    declarations = new Map(superConstructor ? getDeclarations(superConstructor) : undefined)
    constructor[propertiesSymbol] = declarations
  }
  return declarations
}

export function getPropertyInternalKey(key: string): string {
  return `__internal:${key}`
}

export function getPropertyDescriptor<V, T extends PropertyAccessor>(
  key: string,
  declaration: PropertyDeclaration = {},
): {
  get: () => any
  set: (v: any) => void
} {
  const internalKey = getPropertyInternalKey(key)

  const {
    default: _default,
    fallback,
    alias,
    internal,
  } = declaration

  const getDefaultValue = (): any => {
    return (typeof _default === 'function' ? _default() : _default) as any
  }

  const getFallbackValue = (): any => {
    return (typeof fallback === 'function' ? fallback() : fallback) as any
  }

  function get(this: T): any {
    let result
    if (alias && alias !== key) {
      result = getObjectValueByPath(this as any, alias)
    }
    else if (!internal && typeof this.getProperty !== 'undefined') {
      result = this.getProperty(key)
    }
    else {
      // @ts-expect-error ignore
      result = this[internalKey]
    }
    // fallback
    result = result ?? getFallbackValue()
    // defaukt value
    if (
      result === undefined
      && _default !== undefined
      // @ts-expect-error ignore
      && !this[initedSymbol]
    ) {
      // @ts-expect-error ignore
      this[initedSymbol] = true
      const defaultValue = getDefaultValue()
      if (defaultValue !== undefined) {
        set.call(this, defaultValue)
        result = defaultValue
      }
    }
    return result
  }

  function set(this: T, newValue: V): void {
    const oldValue = get.call(this)
    if (alias && alias !== key) {
      setObjectValueByPath(this as any, alias, newValue)
    }
    else if (!internal && typeof this.setProperty !== 'undefined') {
      this.setProperty(key, newValue)
    }
    else {
      // @ts-expect-error ignore
      this[internalKey] = newValue
    }
    this.onUpdateProperty?.(key, newValue, oldValue)
  }

  return {
    get,
    set,
  }
}

export function defineProperty<V, T extends PropertyAccessor>(
  constructor: any,
  key: string,
  declaration: PropertyDeclaration = {},
): void {
  getDeclarations(constructor).set(key, declaration)

  const descriptor = getPropertyDescriptor<V, T>(key, declaration)

  Object.defineProperty(constructor.prototype, key, {
    get(this: T) {
      return descriptor.get.call(this)
    },
    set(this: T, newValue: unknown) {
      descriptor.set.call(this, newValue)
    },
    configurable: true,
    enumerable: true,
  })
}

export function property<V, T extends PropertyAccessor>(
  declaration?: PropertyDeclaration,
): PropertyDecorator {
  return function (target: any, key) {
    if (typeof key !== 'string') {
      throw new TypeError('Failed to @property decorator, prop name cannot be a symbol')
    }

    defineProperty<V, T>(target.constructor, key, declaration)
  }
}

export function property2<V, T extends PropertyAccessor>(
  declaration: PropertyDeclaration = {},
) {
  return function (
    _: ClassAccessorDecoratorTarget<T, V>,
    context: ClassAccessorDecoratorContext,
  ) {
    const key = context.name

    if (typeof key !== 'string') {
      throw new TypeError('Failed to @property decorator, prop name cannot be a symbol')
    }

    const descriptor = getPropertyDescriptor(key, declaration)

    return {
      init(this: T, v: V) {
        getDeclarations(this.constructor).set(key, declaration)
        descriptor.set.call(this, v)
        return v
      },
      get(this: T) {
        return descriptor.get.call(this)
      },
      set(this: T, newValue: V) {
        descriptor.set.call(this, newValue)
      },
    } as ClassAccessorDecoratorResult<T, V>
  }
}
