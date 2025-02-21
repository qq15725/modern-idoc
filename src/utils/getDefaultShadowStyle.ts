import type { ShadowStyleDeclaration } from '../interfaces'

export function getDefaultShadowStyle(): ShadowStyleDeclaration {
  return {
    boxShadow: 'none',
  }
}
