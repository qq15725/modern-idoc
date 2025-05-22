import type { NormalizedListStyleStyle } from './list-style'
import type { TextAlign, TextWrap, WritingMode } from './types'
import { getDefaultListStyleStyle } from './list-style'

export type NormalizedTextLineStyle =
  & NormalizedListStyleStyle
  & {
    writingMode: WritingMode
    textWrap: TextWrap
    textAlign: TextAlign
    textIndent: number
    lineHeight: number
  }

export function getDefaultTextLineStyle(): NormalizedTextLineStyle {
  return {
    ...getDefaultListStyleStyle(),
    writingMode: 'horizontal-tb',
    textWrap: 'wrap',
    textAlign: 'start',
    textIndent: 0,
    lineHeight: 1.2,
  }
}
