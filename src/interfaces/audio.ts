import type { Noneable } from './shared'

export type AudioSource = string

export interface AudioDeclaration {
  src: AudioSource
}

export type AudioProp =
  | Noneable
  | AudioSource
  | AudioDeclaration
