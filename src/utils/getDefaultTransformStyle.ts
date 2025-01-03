import type { IDOCTransformStyleDeclaration } from '../interfaces'

export function getDefaultTransformStyle(): IDOCTransformStyleDeclaration {
  return {
    scaleX: 1,
    scaleY: 1,
    skewX: 0,
    skewY: 0,
    translateX: 0,
    translateY: 0,
    transform: 'none',
    transformOrigin: '50% 50%',
  }
}
