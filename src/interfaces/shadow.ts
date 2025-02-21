export interface ShadowDeclaration {
  color: string
  offsetX: number
  offsetY: number
  blur: number
}

export interface ShadowStyleDeclaration {
  shadowColor: string
  shadowOffsetX: number
  shadowOffsetY: number
  shadowBlur: number
  boxShadow: 'none' | string
}
