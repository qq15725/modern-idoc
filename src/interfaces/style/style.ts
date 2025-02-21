import type { ElementStyleDeclaration } from './ElementStyleDeclaration'
import type { TextStyleDeclaration } from './TextStyleDeclaration'

export interface StyleDeclaration extends
  TextStyleDeclaration,
  ElementStyleDeclaration {
  //
}

export type StyleProp = Partial<StyleDeclaration>
