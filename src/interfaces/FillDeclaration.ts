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
  image?: string
  dpi?: number
  rotateWithShape?: boolean
  srcRect?: ImageFillRect
  fillRect?: ImageFillRect
  tile?: ImageFillTile
}

export interface ColorFillDeclaration extends CommonFillDeclaration {
  color?: string
}

export interface FillDeclaration extends ImageFillDeclaration, ColorFillDeclaration {
  //
}
