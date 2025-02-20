import type { TextInlineStyleDeclaration } from './TextInlineStyleDeclaration'
import type { TextLineStyleDeclaration } from './TextLineStyleDeclaration'

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
