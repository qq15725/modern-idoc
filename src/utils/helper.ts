export function isNone<T>(value: T): value is Extract<T, null | undefined | 'none'> {
  return value === null || value === undefined || value === 'none'
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
