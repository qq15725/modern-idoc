import type { ElementStyleDeclaration } from './element-style'
import type { TextStyleDeclaration } from './text-style'
import { getDefaultElementStyle } from './element-style'
import { getDefaultTextStyle } from './text-style'

export interface StyleDeclaration extends
  TextStyleDeclaration,
  ElementStyleDeclaration {
  //
}

export type StyleProperty = Partial<StyleDeclaration>

export function getDefaultStyle(): StyleDeclaration {
  return {
    ...getDefaultElementStyle(),
    ...getDefaultTextStyle(),
  }
}
