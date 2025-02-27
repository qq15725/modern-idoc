import type { ElementStyleDeclaration } from '../interfaces'
import { getDefaultLayoutStyle } from './getDefaultLayoutStyle'
import { getDefaultShadowStyle } from './getDefaultShadowStyle'
import { getDefaultTransformStyle } from './getDefaultTransformStyle'

export function getDefaultElementStyle(): ElementStyleDeclaration {
  return {
    ...getDefaultTransformStyle(),
    ...getDefaultLayoutStyle(),
    ...getDefaultShadowStyle(),
    visibility: 'visible',
    filter: 'none',
    opacity: 1,
    // background
    backgroundImage: 'none',
    backgroundColor: 'none',
    // border
    borderRadius: 0,
    borderColor: 'none',
    borderStyle: 'solid',
    pointerEvents: 'auto',
  }
}
