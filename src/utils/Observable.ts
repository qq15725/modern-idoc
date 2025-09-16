export class Observable<EVENTS extends { [key in keyof EVENTS]: (...args: any[]) => void; }> {
  _observers = new Map<string, Set<any>>()

  on<NAME extends keyof EVENTS & string>(name: NAME, f: EVENTS[NAME]): EVENTS[NAME] {
    let set = this._observers.get(name)
    if (set === undefined) {
      this._observers.set(name, set = new Set())
    }
    set.add(f)
    return f
  }

  once<NAME extends keyof EVENTS & string>(name: NAME, f: EVENTS[NAME]): void {
    const _f = (...args: any[]): void => {
      this.off(name, _f as any)
      f(...args)
    }
    this.on(name, _f as any)
  }

  off<NAME extends keyof EVENTS & string>(name: NAME, f: EVENTS[NAME]): void {
    const observers = this._observers.get(name)
    if (observers !== undefined) {
      observers.delete(f)
      if (observers.size === 0) {
        this._observers.delete(name)
      }
    }
  }

  emit<NAME extends keyof EVENTS & string>(name: NAME, ...args: Parameters<EVENTS[NAME]>): void {
    return Array.from((this._observers.get(name) || new Map()).values())
      .forEach(f => f(...args))
  }

  destroy(): void {
    this._observers = new Map()
  }
}
