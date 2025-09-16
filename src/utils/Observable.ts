export class Observable<T extends { [K in keyof T]: (...args: any[]) => void }> {
  _observers = new Map<string, Set<any>>()

  on<K extends keyof T & string>(event: K, listener: T[K]): this {
    let set = this._observers.get(event)
    if (set === undefined) {
      this._observers.set(event, set = new Set())
    }
    set.add(listener)
    return this
  }

  once<K extends keyof T & string>(event: K, listener: T[K]): this {
    const _f = (...args: any[]): void => {
      this.off(event, _f as any)
      listener(...args)
    }
    this.on(event, _f as any)
    return this
  }

  off<K extends keyof T & string>(event: K, listener: T[K]): this {
    const observers = this._observers.get(event)
    if (observers !== undefined) {
      observers.delete(listener)
      if (observers.size === 0) {
        this._observers.delete(event)
      }
    }
    return this
  }

  emit<K extends keyof T & string>(event: K, ...args: Parameters<T[K]>): this {
    Array.from((this._observers.get(event) || new Map()).values())
      .forEach(f => f(...args))
    return this
  }

  destroy(): void {
    this._observers = new Map()
  }
}
