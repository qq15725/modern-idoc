import type { IDOCShadowStyleDeclaration } from '../interfaces'

export function getDefaultShadowStyle(): IDOCShadowStyleDeclaration {
  return {
    shadowColor: 'transparent',
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowBlur: 0,
  }
}
