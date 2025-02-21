import type { Noneable } from './shared'

export interface ImageDeclaration {
  url: string
  opacity?: number
}

export type ImageProp =
  | Noneable
  | string
  | ImageDeclaration
