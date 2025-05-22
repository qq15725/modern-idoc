import type { NormalizedColor } from '../color'
import type { NormalizedTextInlineStyle } from './text-inline-style'
import type { NormalizedTextLineStyle } from './text-line-style'
import { getDefaultTextInlineStyle } from './text-inline-style'
import { getDefaultTextLineStyle } from './text-line-style'

export interface NormalizedTextDrawStyle {
  textStrokeWidth: number
  textStrokeColor: NormalizedColor
}

export type NormalizedTextStyle =
  & NormalizedTextLineStyle
  & NormalizedTextInlineStyle
  & NormalizedTextDrawStyle

export function getDefaultTextStyle(): Required<NormalizedTextStyle> {
  return {
    ...getDefaultTextLineStyle(),
    ...getDefaultTextInlineStyle(),
    // textStroke
    textStrokeWidth: 0,
    textStrokeColor: 'rgb(0, 0, 0)',
  }
}
