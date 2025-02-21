export interface FillRect {
  left?: number
  top?: number
  bottom?: number
  right?: number
}

export interface FillTile {
  alignment?: string
  scaleX?: number
  scaleY?: number
  translateX?: number
  translateY?: number
  flip?: string
}

export interface FillDeclaration {
  opacity?: number

  // blip
  image?: string
  dpi?: number
  rotateWithShape?: boolean
  srcRect?: FillRect
  fillRect?: FillRect
  tile?: FillTile

  // solid / gradient
  color?: string
}
