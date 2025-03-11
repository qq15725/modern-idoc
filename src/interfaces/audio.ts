import type { None } from './shared'

export type AudioSource = string

export interface AudioDeclaration {
  src: AudioSource
}

export type AudioProp =
  | None
  | AudioSource
  | AudioDeclaration
