import type { ListStyleStyleDeclaration } from './list-style'
import type { TextAlign, TextWrap, WritingMode } from './types'
import { getDefaultListStyleStyle } from './list-style'

export type TextLineStyleDeclaration =
  & ListStyleStyleDeclaration
  & Partial<{
    writingMode: WritingMode
    textWrap: TextWrap
    textAlign: TextAlign
    textIndent: number
    lineHeight: number
  }>

export function getDefaultTextLineStyle(): Required<TextLineStyleDeclaration> {
  return {
    ...getDefaultListStyleStyle(),
    writingMode: 'horizontal-tb',
    textWrap: 'wrap',
    textAlign: 'start',
    textIndent: 0,
    lineHeight: 1.2,
  }
}
