import type { ColorValue } from '../types'
import type { TextInlineStyleDeclaration } from './text-inline-style'
import type { TextLineStyleDeclaration } from './text-line-style'
import { getDefaultTextInlineStyle } from './text-inline-style'
import { getDefaultTextLineStyle } from './text-line-style'

export interface TextDrawStyleDeclaration {
  textStrokeWidth: number
  textStrokeColor: ColorValue
}

export interface TextStyleDeclaration extends
  TextLineStyleDeclaration,
  TextInlineStyleDeclaration,
  TextDrawStyleDeclaration {
  //
}

export function getDefaultTextStyle(): TextStyleDeclaration {
  return {
    ...getDefaultTextLineStyle(),
    ...getDefaultTextInlineStyle(),
    // textStroke
    textStrokeWidth: 0,
    textStrokeColor: 'black',
  }
}
