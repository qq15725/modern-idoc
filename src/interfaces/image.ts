import type { None } from './shared'

export type ImageSource = string

export interface ImageSourceRect {
  left?: number
  top?: number
  bottom?: number
  right?: number
}

export interface ImageDeclaration {
  src: ImageSource
  srcRect?: ImageSourceRect
  opacity?: number
}

export type ImageProp =
  | None
  | ImageSource
  | ImageDeclaration
