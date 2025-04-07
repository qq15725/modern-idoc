import type { FillDeclaration } from './fill'
import type { None } from './types'

export type BackgroundDeclaration = FillDeclaration

export type BackgroundProperty =
  | None
  | string
  | BackgroundDeclaration

export function normalizeBackground(background?: BackgroundProperty): BackgroundDeclaration | undefined {
  if (!background || background === 'none') {
    return undefined
  }
  else if (typeof background === 'string') {
    return { src: background }
  }
  else {
    return background
  }
}
