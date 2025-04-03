import type { ColorValue } from '../types'
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

export interface TextInlineStyleDeclaration extends HighlightStyleDeclaration {
  color: ColorValue
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
}

export function getDefaultTextInlineStyle(): TextInlineStyleDeclaration {
  return {
    ...getDefaultHighlightStyle(),
    color: 'black',
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
