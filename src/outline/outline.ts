import type { FillObject, NormalizedFill } from '../fill'
import type { HeadEnd } from './head-end'
import type { TailEnd } from './tail-end'
import { normalizeFill } from '../fill'
import { pick } from '../utils'

export type OutlineStyle = 'dashed' | 'solid' | string

export interface NormalizedBaseOutline {
  width?: number
  style?: OutlineStyle
  headEnd?: HeadEnd
  tailEnd?: TailEnd
}

export type NormalizedOutline =
  & NormalizedFill
  & NormalizedBaseOutline

export type OutlineObject =
  & FillObject
  & Partial<NormalizedBaseOutline>

export type Outline =
  | string
  | OutlineObject

export function normalizeOutline(outline: Outline): NormalizedOutline {
  if (typeof outline === 'string') {
    return {
      ...normalizeFill(outline),
    }
  }
  else {
    return {
      ...normalizeFill(outline),
      ...pick(outline, ['width', 'style', 'headEnd', 'tailEnd']),
    }
  }
}
