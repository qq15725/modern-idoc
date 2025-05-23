import type { FillObject, NormalizedFill } from './fill'
import { normalizeFill } from './fill'
import { pick } from './utils'

export interface NormalizedBaseBackground {
  fillWithShape?: boolean
}

export type NormalizedBackground =
  & NormalizedFill
  & NormalizedBaseBackground

export type BackgroundObject =
  & FillObject
  & Partial<NormalizedBaseBackground>

export type Background =
  | string
  | BackgroundObject

export function normalizeBackground(background: Background): NormalizedBackground {
  if (typeof background === 'string') {
    return {
      ...normalizeFill(background),
    }
  }
  else {
    return {
      ...normalizeFill(background),
      ...pick(background, ['fillWithShape']),
    }
  }
}
