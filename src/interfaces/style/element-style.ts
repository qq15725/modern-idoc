import type { ShadowStyleDeclaration } from '../shadow'
import type { None } from '../shared'
import type { LayoutStyleDeclaration } from './layout-style'
import type { TransformStyleDeclaration } from './transform-style'
import type { BorderStyle, PointerEvents, Visibility } from './types'

export interface ElementStyleDeclaration extends
  LayoutStyleDeclaration,
  TransformStyleDeclaration,
  ShadowStyleDeclaration {
  // background
  backgroundImage?: None | string
  backgroundColor?: None | string
  // border
  borderRadius: number
  borderColor?: None | string
  borderStyle: BorderStyle
  // outline
  outlineWidth: number
  outlineOffset: number
  outlineColor: None | string
  outlineStyle: string
  // other
  visibility: Visibility
  filter: string
  opacity: number
  pointerEvents: PointerEvents
  maskImage: None | string
}
