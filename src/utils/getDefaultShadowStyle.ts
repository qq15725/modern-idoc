import type { ShadowStyleDeclaration } from '../interfaces'

export function getDefaultShadowStyle(): ShadowStyleDeclaration {
  return {
    shadowColor: 'transparent',
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowBlur: 0,
    boxShadow: 'none',
  }
}
