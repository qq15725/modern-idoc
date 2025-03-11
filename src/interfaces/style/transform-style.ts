import type { None } from '../shared'

export interface TransformStyleDeclaration {
  rotate: number
  scaleX: number
  scaleY: number
  skewX: number
  skewY: number
  translateX: number
  translateY: number
  transform: None | string
  transformOrigin: string
}
