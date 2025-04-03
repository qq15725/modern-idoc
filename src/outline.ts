import type { None } from './types'

export interface OutlineDeclaration {
  width?: number
  style?: 'dashed' | 'solid' | string
  image?: string
  color?: string
  opacity?: number
}

export type OutlineProperty =
  | None
  | string
  | Partial<OutlineDeclaration>

export function normalizeOutline(outline?: OutlineProperty): OutlineDeclaration | undefined {
  if (!outline || outline === 'none') {
    return undefined
  }
  else if (typeof outline === 'string') {
    return {
      color: outline,
    }
  }
  else {
    return outline
  }
}
