import type { Color, ColorDeclaration } from '../color'
import type { ColorFillDeclaration, GradientFillDeclaration } from '../fill'
import type { WithNone } from '../types'
import type { HeadEnd } from './head-end'
import type { TailEnd } from './tail-end'
import { normalizeColor } from '../color'
import { isNone } from '../utils'

export type OutlineFillDeclaration =
  & Partial<ColorFillDeclaration>
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
  & { color: WithNone<Color> }

export type OutlineProperty =
  | string
  | OutlinePropertyObject

export function normalizeOutline(outline: OutlineProperty): OutlineDeclaration {
  if (typeof outline === 'string') {
    return {
      color: normalizeColor(outline),
    }
  }
  else {
    return {
      ...outline,
      color: isNone(outline.color) ? undefined : normalizeColor(outline.color),
    }
  }
}
