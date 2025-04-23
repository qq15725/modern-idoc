import type { ColorDeclaration } from '../color'
import type { TextInlineStyleDeclaration } from './text-inline-style'
import type { TextLineStyleDeclaration } from './text-line-style'
import { getDefaultTextInlineStyle } from './text-inline-style'
import { getDefaultTextLineStyle } from './text-line-style'

export interface TextDrawStyleDeclaration {
  textStrokeWidth: number
  textStrokeColor: ColorDeclaration
}

export type TextStyleDeclaration =
  & TextLineStyleDeclaration
  & TextInlineStyleDeclaration
  & TextDrawStyleDeclaration

export function getDefaultTextStyle(): Required<TextStyleDeclaration> {
  return {
    ...getDefaultTextLineStyle(),
    ...getDefaultTextInlineStyle(),
    // textStroke
    textStrokeWidth: 0,
    textStrokeColor: 'rgb(0, 0, 0)',
  }
}
