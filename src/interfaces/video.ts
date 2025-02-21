import type { Noneable } from './shared'

export interface VideoDeclaration {
  url: string
  opacity?: number
}

export type VideoProp =
  | Noneable
  | string
  | VideoDeclaration
