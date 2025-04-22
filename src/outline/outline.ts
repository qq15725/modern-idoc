import type { Color, ColorDeclaration } from '../color'
import type { GradientFillDeclaration, SolidFillDeclaration } from '../fill'
import type { None } from '../types'
import type { HeadEnd } from './head-end'
import type { TailEnd } from './tail-end'
import { normalizeColor } from '../color'

export type OutlineFillDeclaration =
  & Partial<SolidFillDeclaration>
  & Partial<GradientFillDeclaration>

export type OutlineStyle = 'dashed' | 'solid' | string

export interface OutlineDeclaration extends OutlineFillDeclaration {
  width?: number
  color?: ColorDeclaration
  style?: OutlineStyle
  headEnd?: HeadEnd
  tailEnd?: TailEnd
}

export type OutlinePropertyObject =
  & Partial<OutlineDeclaration>
  & { color?: Color }

export type OutlineProperty =
  | None
  | string
  | OutlinePropertyObject

export function normalizeOutline(outline?: OutlineProperty): OutlineDeclaration | undefined {
  if (!outline || outline === 'none') {
    return undefined
  }
  else if (typeof outline === 'string') {
    return {
      color: normalizeColor(outline),
    }
  }
  else {
    return {
      ...outline,
      color: normalizeColor(outline.color),
    }
  }
}
