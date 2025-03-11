import type { ElementStyleDeclaration } from './element-style'
import type { TextStyleDeclaration } from './text-style'

export interface StyleDeclaration extends
  TextStyleDeclaration,
  ElementStyleDeclaration {
  //
}

export type StyleProp = Partial<StyleDeclaration>
