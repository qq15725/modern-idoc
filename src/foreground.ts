import type { FillObject, NormalizedFill } from './fill'
import { normalizeFill } from './fill'

export interface NormalizedBaseForeground {
  fillWithShape: boolean
}

export type NormalizedForeground =
  & NormalizedBaseForeground
  & NormalizedFill

export type ForegroundObject =
  & Partial<NormalizedBaseForeground>
  & FillObject

export type Foreground =
  | string
  | ForegroundObject

export function normalizeForeground(foreground: Foreground): NormalizedForeground | undefined {
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
