import type { FillObject, NormalizedFill } from './fill'
import { normalizeFill } from './fill'

export interface NormalizedBaseBackground {
  fillWithShape: boolean
}

export type NormalizedBackground =
  & NormalizedBaseBackground
  & NormalizedFill

export type BackgroundObject =
  & Partial<NormalizedBaseBackground>
  & FillObject

export type Background =
  | string
  | BackgroundObject

export function normalizeBackground(background: Background): NormalizedBackground {
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
