import type { FillPropertyObject, NormalizedFill } from './fill'
import { normalizeFill } from './fill'

export interface NormalizedBaseBackground {
  fillWithShape: boolean
}

export type NormalizedBackground =
  & NormalizedBaseBackground
  & NormalizedFill

export type BackgroundPropertyObject =
  & Partial<NormalizedBaseBackground>
  & FillPropertyObject

export type BackgroundProperty =
  | string
  | BackgroundPropertyObject

export function normalizeBackground(background: BackgroundProperty): NormalizedBackground {
  if (typeof background === 'string') {
    return {
      ...normalizeFill(background),
      fillWithShape: false,
    }
  }
  else {
    return {
      ...normalizeFill(background),
      fillWithShape: Boolean(background.fillWithShape),
    }
  }
}
