import type { FillDeclaration, FillPropertyObject } from './fill'
import { normalizeFill } from './fill'

export interface BaseBackgroundDeclaration {
  fillWithShape: boolean
}

export type BackgroundDeclaration =
  & BaseBackgroundDeclaration
  & FillDeclaration

export type BackgroundPropertyObject =
  & Partial<BaseBackgroundDeclaration>
  & FillPropertyObject

export type BackgroundProperty =
  | string
  | BackgroundPropertyObject

export function normalizeBackground(background: BackgroundProperty): BackgroundDeclaration {
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
