export interface ObservableEvents {
  [event: string]: any[]
}

export class Observable<T extends ObservableEvents = ObservableEvents> {
  protected _eventListeners = new Map<string, Set<any>>()

  on<K extends keyof T & string>(event: K, listener: (...args: T[K]) => void): this {
    let listeners = this._eventListeners.get(event)
    if (listeners === undefined) {
      this._eventListeners.set(event, listeners = new Set())
    }
    listeners.add(listener)
    return this
  }

  once<K extends keyof T & string>(event: K, listener: (...args: T[K]) => void): this {
    const _f = (...args: T[K]): void => {
      this.off(event, _f as any)
      listener(...args)
    }
    this.on(event, _f as any)
    return this
  }

  off<K extends keyof T & string>(event: K, listener: (...args: T[K]) => void): this {
    const listeners = this._eventListeners.get(event)
    if (listeners !== undefined) {
      listeners.delete(listener)
      if (listeners.size === 0) {
        this._eventListeners.delete(event)
      }
    }
    return this
  }

  emit<K extends keyof T & string>(event: K, ...args: T[K]): this {
    const listeners = this._eventListeners.get(event)
    if (listeners) {
      for (const listener of listeners) {
        listener(...args)
      }
    }
    return this
  }

  removeAllListeners(): this {
    this._eventListeners.clear()
    return this
  }

  hasEventListener(event: string): boolean {
    return this._eventListeners.has(event)
  }

  destroy(): void {
    this.removeAllListeners()
  }
}
