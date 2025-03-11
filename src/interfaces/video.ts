import type { Noneable } from './shared'

export type VideoSource = string

export interface VideoDeclaration {
  src: VideoSource
  opacity?: number
}

export type VideoProp =
  | Noneable
  | VideoSource
  | VideoDeclaration
