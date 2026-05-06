import { pick } from '../utils'

/**
 * 0    -0.5   0
 * -0.5        -0.5
 * 0    -0.5   0
 */
export interface ImageFillCropRect {
  left?: number
  top?: number
  bottom?: number
  right?: number
}

/**
 * 0    0.5   0
 * 0.5        0.5
 * 0    0.5   0
 */
export interface ImageFillStretchRect {
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

export interface ImageFillObject {
  image: string
  cropRect?: ImageFillCropRect
  stretchRect?: ImageFillStretchRect
  tile?: ImageFillTile
  dpi?: number
  opacity?: number
  rotateWithShape?: boolean
}

export type ImageFill =
  | string
  | ImageFillObject

export interface NormalizedImageFill extends ImageFillObject {
  //
}

export const imageFillFiedls: (keyof NormalizedImageFill)[] = [
  'image',
  'cropRect',
  'stretchRect',
  'tile',
  'dpi',
  'opacity',
  'rotateWithShape',
]

export function normalizeImageFill(fill: ImageFill): NormalizedImageFill {
  let obj: ImageFillObject
  if (typeof fill === 'string') {
    obj = { image: fill }
  }
  else {
    obj = { ...fill }
  }
  return pick(obj, imageFillFiedls)
}
