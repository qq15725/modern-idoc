import type { ListStyleStyleDeclaration } from './ListStyleStyleDeclaration'
import type { TextAlign, TextWrap, WritingMode } from './types'

export interface TextLineStyleDeclaration extends ListStyleStyleDeclaration {
  writingMode: WritingMode
  textWrap: TextWrap
  textAlign: TextAlign
  textIndent: number
  lineHeight: number
}
