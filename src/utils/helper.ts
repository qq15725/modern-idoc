export function isNone<T>(value: T): value is Extract<T, null | undefined | '' | 'none'> {
  return value === null || value === undefined || value === '' || value === 'none'
}

export function round(number: number, digits = 0, base = 10 ** digits): number {
  return Math.round(base * number) / base + 0
}

export function clearUndef<T>(obj: T, deep = false): T {
  if (typeof obj !== 'object' || !obj) {
    return obj
  }
  if (Array.isArray(obj)) {
    if (deep) {
      return obj.map(v => clearUndef(v, deep)) as T
    }
    else {
      return obj as T
    }
  }
  const newObj: Record<string, any> = {}
  for (const key in obj) {
    const value = obj[key]
    if (value === undefined || value === null) {
      continue
    }
    if (deep) {
      newObj[key] = clearUndef(value, deep)
    }
    else {
      newObj[key] = value
    }
  }
  return newObj as T
}

export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>
  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key]
    }
  })
  return result
}
