import type { Color } from '../color'
import type { None } from '../types'
import type { ElementStyleDeclaration } from './element-style'
import type { TextStyleDeclaration } from './text-style'
import { normalizeColor } from '../color'
import { clearUndef } from '../utils'
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
    color?: Color
    backgroundColor?: Color
    borderColor?: Color
    outlineColor?: Color
    shadowColor?: Color
  }

export type StyleProperty =
  | None
  | StylePropertyObject

export function normalizeStyle(style?: StyleProperty): Partial<StyleDeclaration> | undefined {
  if (!style || style === 'none') {
    return undefined
  }
  return clearUndef({
    ...style,
    color: normalizeColor(style.color),
    backgroundColor: normalizeColor(style.backgroundColor),
    borderColor: normalizeColor(style.borderColor),
    outlineColor: normalizeColor(style.outlineColor),
    shadowColor: normalizeColor(style.shadowColor),
  })
}

export function getDefaultStyle(): StyleDeclaration {
  return {
    ...getDefaultElementStyle(),
    ...getDefaultTextStyle(),
  }
}
