import type { TextInlineStyleDeclaration } from './text-inline-style'
import type { TextLineStyleDeclaration } from './text-line-style'

export interface TextDrawStyleDeclaration {
  textStrokeWidth: number
  textStrokeColor: string
}

export interface TextStyleDeclaration extends
  TextLineStyleDeclaration,
  TextInlineStyleDeclaration,
  TextDrawStyleDeclaration {
  //
}
