import { getObjectValueByPath, setObjectValueByPath } from '../utils'

export interface PropertyDeclaration {
  [key: string]: unknown
  fallback?: unknown | (() => unknown)
  alias?: string
}

export interface ReactiveObject {
  getter?: (key: string, context: ReactiveObjectGetterSetterContext) => any
  setter?: (key: string, value: any, context: ReactiveObjectGetterSetterContext) => void
  onUpdateProperty?: (key: string, newValue: unknown, oldValue: unknown, declaration: PropertyDeclaration) => void
}

export interface ReactiveObjectGetterSetterContext {
  declaration: PropertyDeclaration
  internalKey: symbol
}

const propertiesSymbol = Symbol('properties')
export function getDeclarations(target: unknown): Map<string, PropertyDeclaration> {
  const proto = Object.getPrototypeOf(target)
  let declarations
  if (proto && Object.hasOwn(proto, propertiesSymbol)) {
    declarations = proto[propertiesSymbol]
  }
  else {
    declarations = new Map(proto ? getDeclarations(proto) : undefined)
    if (proto) {
      proto[propertiesSymbol] = declarations
    }
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
    fallback,
    alias,
  } = declaration

  const ctx = { declaration, internalKey }

  const getFallbackValue = (): any => {
    return (typeof fallback === 'function' ? fallback() : fallback) as any
  }

  return {
    get(this: T) {
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
      return result ?? getFallbackValue()
    },
    set(this: T, newValue: V) {
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
    },
  }
}

export function defineProperty<V, T extends ReactiveObject>(
  target: any,
  key: string,
  declaration: PropertyDeclaration = {},
): void {
  getDeclarations(
    typeof target === 'function'
      ? target
      : target.constructor,
  ).set(key, declaration)

  const descriptor = getPropertyDescriptor<V, T>(key, declaration)

  Object.defineProperty(target.prototype, key, {
    get(this: T) {
      return descriptor.get.call(this)
    },
    set(this: T, newValue: unknown) {
      const oldValue = descriptor.get?.call(this)
      descriptor.set.call(this, newValue)
      this.onUpdateProperty?.(key, newValue, oldValue, declaration)
    },
    configurable: true,
    enumerable: true,
  })
}

export function property<V, T extends ReactiveObject>(
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
