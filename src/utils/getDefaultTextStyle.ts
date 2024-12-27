import type { IDOCTextStyleDeclaration } from '../interfaces'

export function getDefaultTextStyle(): IDOCTextStyleDeclaration {
  return {
    writingMode: 'horizontal-tb',
    verticalAlign: 'baseline',
    lineHeight: 1.2,
    letterSpacing: 0,
    wordSpacing: 0,
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
    // highlight
    highlightImage: 'none',
    highlightReferImage: 'none',
    highlightColormap: 'none',
    highlightLine: 'none',
    highlightSize: 'cover',
    highlightThickness: '100%',
    // transform
    scaleX: 1,
    scaleY: 1,
    skewX: 0,
    skewY: 0,
    translateX: 0,
    translateY: 0,
    transform: 'none',
    transformOrigin: '50% 50%',
    // shadow
    shadowColor: 'transparent',
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowBlur: 0,
  }
}
