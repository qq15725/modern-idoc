import type { GradientFillDeclaration, SolidFillDeclaration } from '../fill'
import type { None } from '../types'
import type { HeadEnd } from './head-end'
import type { TailEnd } from './tail-end'

export type OutlineFillDeclaration =
  & Partial<SolidFillDeclaration>
  & Partial<GradientFillDeclaration>

export type OutlineStyle = 'dashed' | 'solid' | string

export interface OutlineDeclaration extends OutlineFillDeclaration {
  width?: number
  style?: OutlineStyle
  headEnd?: HeadEnd
  tailEnd?: TailEnd
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
