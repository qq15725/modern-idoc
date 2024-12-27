import type { IDOCElementStyleDeclaration } from '../interfaces'

export function getDefaultElementStyle(): IDOCElementStyleDeclaration {
  return {
    overflow: 'visible',
    visibility: 'visible',
    filter: 'none',
    // position
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    rotate: 0,
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
    scaleX: 1,
    scaleY: 1,
    skewX: 0,
    skewY: 0,
    translateX: 0,
    translateY: 0,
    transform: 'none',
    transformOrigin: '50% 50%',
    // background
    backgroundImage: 'none',
    backgroundColor: 'transparent',
    // shadow
    shadowColor: 'transparent',
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowBlur: 0,
    // border
    borderRadius: 0,
    borderColor: 'transparent',
    borderWidth: 1,
  }
}
