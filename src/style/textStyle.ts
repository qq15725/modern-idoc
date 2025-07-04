import type { NormalizedColor } from '../color'
import type { NormalizedTextInlineStyle } from './textInlineStyle'
import type { NormalizedTextLineStyle } from './textLineStyle'
import { getDefaultTextInlineStyle } from './textInlineStyle'
import { getDefaultTextLineStyle } from './textLineStyle'

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
