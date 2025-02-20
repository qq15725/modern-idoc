import type { TransformStyleDeclaration } from '../interfaces'

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
