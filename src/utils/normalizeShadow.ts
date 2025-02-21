import type { ShadowDeclaration, ShadowProp } from '../interfaces'

export function normalizeShadow(shadow?: ShadowProp): ShadowDeclaration | undefined {
  if (!shadow || shadow === 'none') {
    return undefined
  }
  else if (typeof shadow === 'string') {
    return {
      color: shadow,
    }
  }
  else {
    return shadow
  }
}
