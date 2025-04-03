import type { ShadowStyleDeclaration } from '../shadow'
import type { ColorValue, None } from '../types'
import type { LayoutStyleDeclaration } from './layout-style'
import type { TransformStyleDeclaration } from './transform-style'
import type { BorderStyle, PointerEvents, Visibility } from './types'
import { getDefaultShadowStyle } from '../shadow'
import { getDefaultLayoutStyle } from './layout-style'
import { getDefaultTransformStyle } from './transform-style'

export interface ElementStyleDeclaration extends
  LayoutStyleDeclaration,
  TransformStyleDeclaration,
  ShadowStyleDeclaration {
  // background
  backgroundImage?: None | string
  backgroundColor?: None | ColorValue
  // border
  borderRadius: number
  borderColor?: None | ColorValue
  borderStyle: BorderStyle
  // outline
  outlineWidth: number
  outlineOffset: number
  outlineColor: None | ColorValue
  outlineStyle: string
  // other
  visibility: Visibility
  filter: string
  opacity: number
  pointerEvents: PointerEvents
  maskImage: None | string
}

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
