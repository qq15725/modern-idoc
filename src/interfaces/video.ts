import type { Noneable } from './shared'

export interface VideoDeclaration {
  src: string
  opacity?: number
}

export type VideoProp =
  | Noneable
  | string
  | VideoDeclaration
