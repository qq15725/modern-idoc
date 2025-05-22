import type { FillPropertyObject, NormalizedFill } from './fill'
import { normalizeFill } from './fill'

export interface NormalizedBaseForeground {
  fillWithShape: boolean
}

export type NormalizedForeground =
  & NormalizedBaseForeground
  & NormalizedFill

export type ForegroundPropertyObject =
  & Partial<NormalizedBaseForeground>
  & FillPropertyObject

export type ForegroundProperty =
  | string
  | ForegroundPropertyObject

export function normalizeForeground(foreground: ForegroundProperty): NormalizedForeground | undefined {
  if (typeof foreground === 'string') {
    return {
      ...normalizeFill(foreground),
      fillWithShape: false,
    }
  }
  else {
    return {
      ...normalizeFill(foreground),
      fillWithShape: Boolean(foreground.fillWithShape),
    }
  }
}
