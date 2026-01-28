export interface ObservableEvents {
  [event: string]: any[]
}

export class Observable<T extends ObservableEvents = ObservableEvents> {
  protected _eventListeners: Record<string, any[]> = {}

  on<K extends keyof T & string>(event: K, listener: (...args: T[K]) => void): this {
    let listeners = this._eventListeners[event]
    if (listeners === undefined) {
      listeners = []
      this._eventListeners[event] = listeners
    }
    listeners.splice(listeners.indexOf(listener), 1)
    listeners.push(listener)
    return this
  }

  once<K extends keyof T & string>(event: K, listener: (...args: T[K]) => void): this {
    const _f = (...args: T[K]): void => {
      this.off(event, _f as any)
      listener.apply(this, args)
    }
    this.on(event, _f as any)
    return this
  }

  off<K extends keyof T & string>(event: K, listener: (...args: T[K]) => void): this {
    const listeners = this._eventListeners[event]
    if (listeners !== undefined) {
      listeners.splice(listeners.indexOf(listener), 1)
      if (listeners.length === 0) {
        delete this._eventListeners[event]
      }
    }
    return this
  }

  emit<K extends keyof T & string>(event: K, ...args: T[K]): this {
    const listeners = this._eventListeners[event]
    if (listeners) {
      for (let len = listeners.length, i = 0; i < len; i++) {
        listeners[i].apply(this, args)
      }
    }
    return this
  }

  removeAllListeners(): this {
    this._eventListeners = {}
    return this
  }

  hasEventListener(event: string): boolean {
    return Boolean(this._eventListeners[event])
  }

  destroy(): void {
    this.removeAllListeners()
  }
}
