import type { ITextStyle } from '../interfaces'
import { getDefaultElementStyle } from './getDefaultElementStyle'

export function getDefaultTextStyle(): ITextStyle {
  return {
    ...getDefaultElementStyle(),
    writingMode: 'horizontal-tb',
    verticalAlign: 'baseline',
    lineHeight: 1.2,
    letterSpacing: 0,
    // font
    fontSize: 14,
    fontWeight: 'normal',
    fontFamily: '',
    fontStyle: 'normal',
    fontKerning: 'normal',
    // text
    textWrap: 'wrap',
    textAlign: 'start',
    textIndent: 0,
    textTransform: 'none',
    textOrientation: 'mixed',
    textDecoration: 'none',
    // textStroke
    textStrokeWidth: 0,
    textStrokeColor: 'black',
    // color
    color: 'black',
    // listStyle
    listStyleType: 'none',
    listStyleImage: 'none',
    listStyleColormap: 'none',
    listStyleSize: 'cover',
    listStylePosition: 'outside',

    // listStyle
    highlightImage: 'none',
    highlightReferImage: 'none',
    highlightColormap: 'none',
    highlightLine: 'none',
    highlightSize: 'cover',
    highlightThickness: '100%',
  }
}
