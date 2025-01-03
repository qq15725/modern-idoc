import type { IDOCElementStyleDeclaration } from '../interfaces'
import { getDefaultShadowStyle } from './getDefaultShadowStyle'
import { getDefaultTransformStyle } from './getDefaultTransformStyle'

export function getDefaultElementStyle(): IDOCElementStyleDeclaration {
  return {
    overflow: 'visible',
    visibility: 'visible',
    filter: 'none',
    opacity: 1,
    // margin
    marginLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    // padding
    paddingLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    // transform
    ...getDefaultTransformStyle(),
    // background
    backgroundImage: 'none',
    backgroundColor: 'transparent',
    // shadow
    ...getDefaultShadowStyle(),
    // border
    borderRadius: 0,
    borderColor: 'transparent',
    borderWidth: 1,
  }
}
