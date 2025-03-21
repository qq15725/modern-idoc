import type { None } from './shared'

export interface ImageFillStretchRect {
  left?: number
  top?: number
  bottom?: number
  right?: number
}

export interface ImageFillStretch {
  rect?: ImageFillStretchRect
}

export interface ImageFillTile {
  alignment?: string
  scaleX?: number
  scaleY?: number
  translateX?: number
  translateY?: number
  flip?: string
}

export interface CommonFillDeclaration {
  opacity?: number
}

export type ImageFillSource = string

export interface ImageFillDeclaration extends CommonFillDeclaration {
  type: 'image'
  image: ImageFillSource
  dpi?: number
  rotateWithShape?: boolean
  stretch?: ImageFillStretch
  tile?: ImageFillTile
}

export interface ColorFillDeclaration extends CommonFillDeclaration {
  type: 'color'
  color: string
}

export type FillDeclaration =
  | ImageFillDeclaration
  | ColorFillDeclaration

export type FillProp =
  | None
  | string
  | FillDeclaration
