import type { Color } from '../color'
import type { WithStyleNone } from '../types'
import type { NormalizedElementStyle } from './elementStyle'
import type { NormalizedTextStyle } from './textStyle'
import { normalizeColor } from '../color'
import { clearUndef, isNone } from '../utils'
import { getDefaultElementStyle } from './elementStyle'
import { getDefaultTextStyle } from './textStyle'

export type FullStyle =
  & NormalizedTextStyle
  & NormalizedElementStyle

export type NormalizedStyle = Partial<FullStyle>

export type StyleObject =
  & NormalizedStyle
  & {
    color?: WithStyleNone<Color>
    backgroundColor?: WithStyleNone<Color>
    borderColor?: WithStyleNone<Color>
    outlineColor?: WithStyleNone<Color>
    shadowColor?: WithStyleNone<Color>
  }

export type Style = StyleObject

export function normalizeStyle(style: Style): NormalizedStyle {
  return clearUndef({
    ...style,
    color: isNone(style.color) ? undefined : normalizeColor(style.color),
    backgroundColor: isNone(style.backgroundColor) ? undefined : normalizeColor(style.backgroundColor),
    borderColor: isNone(style.borderColor) ? undefined : normalizeColor(style.borderColor),
    outlineColor: isNone(style.outlineColor) ? undefined : normalizeColor(style.outlineColor),
    shadowColor: isNone(style.shadowColor) ? undefined : normalizeColor(style.shadowColor),
    textStrokeColor: isNone(style.textStrokeColor) ? undefined : normalizeColor(style.textStrokeColor),
  })
}

export function getDefaultStyle(): FullStyle {
  return {
    ...getDefaultElementStyle(),
    ...getDefaultTextStyle(),
  }
}
