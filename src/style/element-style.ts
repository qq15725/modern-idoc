import type { ColorDeclaration } from '../color'
import type { ShadowStyleDeclaration } from '../shadow'
import type { None } from '../types'
import type { LayoutStyleDeclaration } from './layout-style'
import type { TransformStyleDeclaration } from './transform-style'
import type { BorderStyle, PointerEvents, Visibility } from './types'
import { getDefaultShadowStyle } from '../shadow'
import { getDefaultLayoutStyle } from './layout-style'
import { getDefaultTransformStyle } from './transform-style'

export type ElementStyleDeclaration =
  & Partial<LayoutStyleDeclaration>
  & TransformStyleDeclaration
  & ShadowStyleDeclaration
  & {
  // background
    backgroundImage: None | string
    backgroundColor: None | ColorDeclaration
    // border
    borderRadius: number
    borderColor: None | ColorDeclaration
    borderStyle: BorderStyle
    // outline
    outlineWidth: number
    outlineOffset: number
    outlineColor: None | ColorDeclaration
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
    outlineColor: 'rgb(0, 0, 0)',
    outlineStyle: 'none',
    // other
    visibility: 'visible',
    filter: 'none',
    opacity: 1,
    pointerEvents: 'auto',
    maskImage: 'none',
  }
}
