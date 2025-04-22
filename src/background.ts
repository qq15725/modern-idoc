import type { FillDeclaration, FillPropertyObject } from './fill'
import type { None } from './types'
import { normalizeFill } from './fill'

export interface BaseBackgroundDeclaration {
  withGeometry?: boolean
}

export type BackgroundDeclaration =
  & BaseBackgroundDeclaration
  & FillDeclaration

export type BackgroundPropertyObject =
  & BaseBackgroundDeclaration
  & FillPropertyObject

export type BackgroundProperty =
  | None
  | string
  | BackgroundPropertyObject

export function normalizeBackground(background?: BackgroundProperty): BackgroundDeclaration | undefined {
  if (!background || background === 'none') {
    return undefined
  }
  else if (typeof background === 'string') {
    return { src: background }
  }
  else {
    return {
      ...background,
      ...normalizeFill(background),
    }
  }
}
