/**
 * 0    -0.5   0
 * -0.5        -0.5
 * 0    -0.5   0
 */
export interface TextureFillSourceRect {
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
export interface TextureFillStretchRect {
  left?: number
  top?: number
  bottom?: number
  right?: number
}

export interface TextureFillStretch {
  rect?: TextureFillStretchRect
}

export interface TextureFillTile {
  alignment?: string
  scaleX?: number
  scaleY?: number
  translateX?: number
  translateY?: number
  flip?: string
}

export type TextureFillSourceURL = string

export interface TextureFillDeclaration {
  src: TextureFillSourceURL
  srcRect?: TextureFillSourceRect
  dpi?: number
  stretch?: TextureFillStretch
  tile?: TextureFillTile
  opacity?: number
  rotateWithShape?: boolean
}
