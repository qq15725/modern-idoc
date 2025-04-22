import type { ColorDeclaration } from '../color'
import type { HighlightStyleDeclaration } from './highlight'
import type {
  FontKerning,
  FontStyle,
  FontWeight,
  TextDecoration,
  TextOrientation,
  TextTransform,
  VerticalAlign,
} from './types'
import { getDefaultHighlightStyle } from './highlight'

export type TextInlineStyleDeclaration =
  & HighlightStyleDeclaration
  & Partial<{
    color: ColorDeclaration
    verticalAlign: VerticalAlign
    letterSpacing: number
    wordSpacing: number
    // font
    fontSize: number
    fontWeight: FontWeight
    fontFamily: string
    fontStyle: FontStyle
    fontKerning: FontKerning
    // text
    textTransform: TextTransform
    textOrientation: TextOrientation
    textDecoration: TextDecoration
  }>

export function getDefaultTextInlineStyle(): Required<TextInlineStyleDeclaration> {
  return {
    ...getDefaultHighlightStyle(),
    color: 'rgb(0, 0, 0)',
    verticalAlign: 'baseline',
    letterSpacing: 0,
    wordSpacing: 0,
    // font
    fontSize: 14,
    fontWeight: 'normal',
    fontFamily: '',
    fontStyle: 'normal',
    fontKerning: 'normal',
    // text
    textTransform: 'none',
    textOrientation: 'mixed',
    textDecoration: 'none',
  }
}
