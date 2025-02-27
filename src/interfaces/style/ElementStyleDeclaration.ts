import type { ShadowStyleDeclaration } from '../shadow'
import type { Noneable } from '../shared'
import type { LayoutStyleDeclaration } from './LayoutStyleDeclaration'
import type { TransformStyleDeclaration } from './TransformStyleDeclaration'
import type { BorderStyle, PointerEvents, Visibility } from './types'

export interface ElementStyleDeclaration extends
  LayoutStyleDeclaration,
  TransformStyleDeclaration,
  ShadowStyleDeclaration {
  visibility: Visibility
  filter: string
  opacity: number
  // background
  backgroundImage: Noneable | string
  backgroundColor: Noneable | string
  // border
  borderRadius: number
  borderColor: Noneable | string
  borderStyle: BorderStyle
  pointerEvents: PointerEvents
}
