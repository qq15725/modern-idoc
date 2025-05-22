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

export interface ImageFillPropertyObject {
  image: string
  cropRect?: ImageFillCropRect
  stretchRect?: ImageFillStretchRect
  tile?: ImageFillTile
  dpi?: number
  opacity?: number
  rotateWithShape?: boolean
}

export interface ImageFillDeclaration extends ImageFillPropertyObject {
  //
}

export function normalizeImageFill(fill: ImageFillPropertyObject): ImageFillDeclaration {
  return fill
}
