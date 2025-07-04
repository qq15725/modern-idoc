import type { Color } from '../color'
import type { Fill, NormalizedFill } from '../fill'
import type { NormalizedOutline, Outline } from '../outline'
import type { WithStyleNone } from '../types'
import type { NormalizedElementStyle } from './elementStyle'
import type { NormalizedTextStyle } from './textStyle'
import { normalizeColor } from '../color'
import { clearUndef, isNone } from '../utils'
import { getDefaultElementStyle } from './elementStyle'
import { getDefaultTextStyle } from './textStyle'

export type NormalizedStyle =
  & NormalizedTextStyle
  & NormalizedElementStyle
  & {
    fill?: NormalizedFill
    outline?: NormalizedOutline
  }

export type StyleObject =
  & Partial<NormalizedStyle>
  & {
    color?: WithStyleNone<Color>
    backgroundColor?: WithStyleNone<Color>
    borderColor?: WithStyleNone<Color>
    outlineColor?: WithStyleNone<Color>
    shadowColor?: WithStyleNone<Color>
    fill?: Fill
    outline?: Outline
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
