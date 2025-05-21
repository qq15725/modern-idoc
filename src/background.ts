import type { FillDeclaration, FillPropertyObject } from './fill'
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
  | string
  | BackgroundPropertyObject

export function normalizeBackground(background: BackgroundProperty): BackgroundDeclaration {
  if (typeof background === 'string') {
    return { src: background }
  }
  else {
    return {
      ...background,
      ...normalizeFill(background),
    }
  }
}
