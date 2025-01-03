import type { IDOCTransformStyleDeclaration } from '../interfaces'

export function getDefaultTransformStyle(): IDOCTransformStyleDeclaration {
  return {
    left: 0,
    top: 0,
    width: 0,
    height: 0,
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
