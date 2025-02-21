import type { ShadowStyleDeclaration } from '../shadow'
import type { LayoutStyleDeclaration } from './LayoutStyleDeclaration'
import type { TransformStyleDeclaration } from './TransformStyleDeclaration'
import type { Visibility } from './types'

export interface ElementStyleDeclaration extends
  LayoutStyleDeclaration,
  TransformStyleDeclaration,
  ShadowStyleDeclaration {
  visibility: Visibility
  filter: string
  opacity: number
  // background
  backgroundImage: string
  backgroundColor: string
  // border
  borderRadius: number
  borderColor: string
}
