import type { None } from './types'

export interface AudioDeclaration {
  src: string
}

export type AudioProperty =
  | None
  | string
  | AudioDeclaration

export function normalizeAudio(audio?: AudioProperty): AudioDeclaration | undefined {
  if (!audio || audio === 'none') {
    return undefined
  }
  else if (typeof audio === 'string') {
    return { src: audio }
  }
  else {
    return audio
  }
}
