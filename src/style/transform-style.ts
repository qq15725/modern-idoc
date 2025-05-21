import type { WithNone } from '../types'

export interface TransformStyleDeclaration {
  rotate: number
  scaleX: number
  scaleY: number
  skewX: number
  skewY: number
  translateX: number
  translateY: number
  transform: WithNone<string>
  transformOrigin: string
}

export function getDefaultTransformStyle(): TransformStyleDeclaration {
  return {
    rotate: 0,
    scaleX: 1,
    scaleY: 1,
    skewX: 0,
    skewY: 0,
    translateX: 0,
    translateY: 0,
    transform: 'none',
    transformOrigin: 'center',
  }
}
