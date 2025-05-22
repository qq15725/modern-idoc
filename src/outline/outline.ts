import type { Color, ColorDeclaration } from '../color'
import type { NormalizedColorFill, NormalizedGradientFill } from '../fill'
import type { WithNone } from '../types'
import type { HeadEnd } from './head-end'
import type { TailEnd } from './tail-end'
import { normalizeColor } from '../color'
import { isNone } from '../utils'

export type NormalizedOutlineFill =
  & Partial<NormalizedColorFill>
  & Partial<NormalizedGradientFill>

export type OutlineStyle = 'dashed' | 'solid' | string

export interface NormalizedOutline extends NormalizedOutlineFill {
  width?: number
  color?: ColorDeclaration
  style?: OutlineStyle
  headEnd?: HeadEnd
  tailEnd?: TailEnd
}

export type OutlinePropertyObject =
  & Partial<NormalizedOutline>
  & { color: WithNone<Color> }

export type OutlineProperty =
  | string
  | OutlinePropertyObject

export function normalizeOutline(outline: OutlineProperty): NormalizedOutline {
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
