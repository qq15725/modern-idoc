import { getObjectValueByPath, setObjectValueByPath } from '../utils'

export interface PropertyDeclaration {
  [key: string]: unknown
  default?: unknown | (() => unknown)
  fallback?: unknown | (() => unknown)
  alias?: string
}

export interface ReactiveObject {
  getter?: (key: string, context: ReactiveObjectPropertyAccessorContext) => any
  setter?: (key: string, value: any, context: ReactiveObjectPropertyAccessorContext) => void
  onUpdateProperty?: (key: string, newValue: unknown, oldValue: unknown, declaration: PropertyDeclaration) => void
}

export interface ReactiveObjectPropertyAccessorContext {
  declaration: PropertyDeclaration
  internalKey: symbol
}

const propertiesSymbol = Symbol('properties')
const defaultValueInitedSymbol = Symbol('defaultValueInited')

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

export function getPropertyDescriptor<V, T extends ReactiveObject>(
  key: string,
  declaration: PropertyDeclaration = {},
): {
  get: () => any
  set: (v: any) => void
} {
  const internalKey = Symbol.for(key)

  const {
    default: _default,
    fallback,
    alias,
  } = declaration

  const ctx = { declaration, internalKey }

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
    else {
      if (typeof this.getter !== 'undefined') {
        result = this.getter(key, ctx)
      }
      else {
        // @ts-expect-error ignore
        result = this[internalKey]
      }
    }
    // fallback
    result = result ?? getFallbackValue()
    // defaukt value
    if (
      result === undefined
      && _default !== undefined
      // @ts-expect-error ignore
      && !this[defaultValueInitedSymbol]) {
      // @ts-expect-error ignore
      this[defaultValueInitedSymbol] = true
      const defaultValue = getDefaultValue()
      if (defaultValue !== undefined) {
        set.call(this, defaultValue)
        result = defaultValue
      }
    }
    return result
  }

  function set(this: T, newValue: V): void {
    if (alias && alias !== key) {
      setObjectValueByPath(this as any, alias, newValue)
    }
    else {
      if (typeof this.setter !== 'undefined') {
        this.setter(key, newValue, ctx)
      }
      else {
        // @ts-expect-error ignore
        this[internalKey] = newValue
      }
    }
  }

  return {
    get,
    set,
  }
}

export function defineProperty<V, T extends ReactiveObject>(
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
      const oldValue = descriptor.get.call(this)
      descriptor.set.call(this, newValue)
      this.onUpdateProperty?.(key, newValue, oldValue, declaration)
    },
    configurable: true,
    enumerable: true,
  })
}

export function property<V, T extends ReactiveObject>(
  declaration?: PropertyDeclaration,
): PropertyDecorator {
  return function (target: any, key) {
    if (typeof key !== 'string') {
      throw new TypeError('Failed to @property decorator, prop name cannot be a symbol')
    }

    defineProperty<V, T>(target.constructor, key, declaration)
  }
}

export function property2<V, T extends ReactiveObject>(
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
        const oldValue = descriptor.get?.call(this)
        descriptor.set.call(this, newValue)
        this.onUpdateProperty?.(key, newValue, oldValue, declaration)
      },
    } as ClassAccessorDecoratorResult<T, V>
  }
}
