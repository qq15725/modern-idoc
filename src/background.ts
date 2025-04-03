import type { SingleFillDeclaration } from './fill'
import type { None } from './types'

export interface AudioBackgroundDeclaration {
  type: 'audio'
  src: string
}

export type SingleBackgroundDeclaration =
  | SingleFillDeclaration
  | AudioBackgroundDeclaration

export type BackgroundDeclaration = SingleBackgroundDeclaration[]

export type BackgroundProperty =
  | None
  | string
  | SingleBackgroundDeclaration
  | BackgroundDeclaration

export function normalizeBackground(background?: BackgroundProperty): BackgroundDeclaration | undefined {
  if (!background || background === 'none') {
    return undefined
  }
  else if (typeof background === 'string') {
    return [
      { type: 'texture', src: background },
    ]
  }
  else if (!Array.isArray(background)) {
    return [background]
  }
  else {
    return background
  }
}
