import type { Noneable } from './shared'

export interface ImageRect {
  left?: number
  top?: number
  bottom?: number
  right?: number
}

export interface ImageDeclaration {
  src: string
  srcRect?: ImageRect
  opacity?: number
}

export type ImageProp =
  | Noneable
  | string
  | ImageDeclaration
