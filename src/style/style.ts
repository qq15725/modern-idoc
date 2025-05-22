import type { Color } from '../color'
import type { WithNone } from '../types'
import type { NormalizedElementStyle } from './element-style'
import type { NormalizedTextStyle } from './text-style'
import { normalizeColor } from '../color'
import { clearUndef, isNone } from '../utils'
import { getDefaultElementStyle } from './element-style'
import { getDefaultTextStyle } from './text-style'

export interface NormalizedStyle extends
  NormalizedTextStyle,
  NormalizedElementStyle {
  //
}

export type StyleObject =
  & Partial<NormalizedStyle>
  & {
    color?: WithNone<Color>
    backgroundColor?: WithNone<Color>
    borderColor?: WithNone<Color>
    outlineColor?: WithNone<Color>
    shadowColor?: WithNone<Color>
  }

export type Style = StyleObject

export function normalizeStyle(style: Style): Partial<NormalizedStyle> {
  return clearUndef({
    ...style,
    color: isNone(style.color) ? undefined : normalizeColor(style.color),
    backgroundColor: isNone(style.backgroundColor) ? undefined : normalizeColor(style.backgroundColor),
    borderColor: isNone(style.borderColor) ? undefined : normalizeColor(style.borderColor),
    outlineColor: isNone(style.outlineColor) ? undefined : normalizeColor(style.outlineColor),
    shadowColor: isNone(style.shadowColor) ? undefined : normalizeColor(style.shadowColor),
  })
}

export function getDefaultStyle(): NormalizedStyle {
  return {
    ...getDefaultElementStyle(),
    ...getDefaultTextStyle(),
  }
}
