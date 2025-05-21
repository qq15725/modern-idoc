import type { Color } from '../color'
import type { WithNone } from '../types'
import type { ElementStyleDeclaration } from './element-style'
import type { TextStyleDeclaration } from './text-style'
import { normalizeColor } from '../color'
import { clearUndef, isNone } from '../utils'
import { getDefaultElementStyle } from './element-style'
import { getDefaultTextStyle } from './text-style'

export interface StyleDeclaration extends
  TextStyleDeclaration,
  ElementStyleDeclaration {
  //
}

export type StylePropertyObject =
  & Partial<StyleDeclaration>
  & {
    color?: WithNone<Color>
    backgroundColor?: WithNone<Color>
    borderColor?: WithNone<Color>
    outlineColor?: WithNone<Color>
    shadowColor?: WithNone<Color>
  }

export type StyleProperty = StylePropertyObject

export function normalizeStyle(style: StyleProperty): Partial<StyleDeclaration> {
  return clearUndef({
    ...style,
    color: isNone(style.color) ? undefined : normalizeColor(style.color),
    backgroundColor: isNone(style.backgroundColor) ? undefined : normalizeColor(style.backgroundColor),
    borderColor: isNone(style.borderColor) ? undefined : normalizeColor(style.borderColor),
    outlineColor: isNone(style.outlineColor) ? undefined : normalizeColor(style.outlineColor),
    shadowColor: isNone(style.shadowColor) ? undefined : normalizeColor(style.shadowColor),
  })
}

export function getDefaultStyle(): StyleDeclaration {
  return {
    ...getDefaultElementStyle(),
    ...getDefaultTextStyle(),
  }
}
