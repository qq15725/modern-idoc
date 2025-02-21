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

export interface TextInlineStyleDeclaration extends HighlightStyleDeclaration {
  color: string
  verticalAlign: VerticalAlign
  letterSpacing: number
  wordSpacing: number
  fontSize: number
  fontWeight: FontWeight
  fontFamily: string
  fontStyle: FontStyle
  fontKerning: FontKerning
  textTransform: TextTransform
  textOrientation: TextOrientation
  textDecoration: TextDecoration
}
