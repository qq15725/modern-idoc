import type { None } from './shared'

export type VideoSource = string

export interface VideoDeclaration {
  src: VideoSource
  opacity?: number
}

export type VideoProp =
  | None
  | VideoSource
  | VideoDeclaration
