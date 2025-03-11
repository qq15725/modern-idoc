import type { ElementStyleDeclaration } from '../interfaces'
import { getDefaultLayoutStyle } from './getDefaultLayoutStyle'
import { getDefaultShadowStyle } from './getDefaultShadowStyle'
import { getDefaultTransformStyle } from './getDefaultTransformStyle'

export function getDefaultElementStyle(): ElementStyleDeclaration {
  return {
    ...getDefaultLayoutStyle(),
    ...getDefaultTransformStyle(),
    ...getDefaultShadowStyle(),
    // background
    backgroundImage: 'none',
    backgroundColor: 'none',
    // border
    borderRadius: 0,
    borderColor: 'none',
    borderStyle: 'solid',
    // outline
    outlineWidth: 0,
    outlineOffset: 0,
    outlineColor: '#000000',
    outlineStyle: 'none',
    // other
    visibility: 'visible',
    filter: 'none',
    opacity: 1,
    pointerEvents: 'auto',
    maskImage: 'none',
  }
}
