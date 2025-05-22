import type { Color, NormalizedColor } from '../color'
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
  color?: NormalizedColor
  style?: OutlineStyle
  headEnd?: HeadEnd
  tailEnd?: TailEnd
}

export type OutlineObject =
  & Partial<NormalizedOutline>
  & { color: WithNone<Color> }

export type Outline =
  | string
  | OutlineObject

export function normalizeOutline(outline: Outline): NormalizedOutline {
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
