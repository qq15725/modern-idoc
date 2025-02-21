import type { Noneable } from './shared'

export interface ImageFillRect {
  left?: number
  top?: number
  bottom?: number
  right?: number
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

export interface ImageFillDeclaration extends CommonFillDeclaration {
  type: 'image'
  image: string
  dpi?: number
  rotateWithShape?: boolean
  srcRect?: ImageFillRect
  fillRect?: ImageFillRect
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
  | Noneable
  | string
  | FillDeclaration
