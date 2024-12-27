export type Overflow = 'hidden' | 'visible'
export type Visibility = 'hidden' | 'visible'
export type FontWeight = 'normal' | 'bold' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
export type FontStyle = 'normal' | 'italic' | 'oblique' | `oblique ${string}`
export type FontKerning = 'none' | 'auto' | 'normal'
export type TextWrap = 'wrap' | 'nowrap'
export type TextAlign = 'center' | 'end' | 'left' | 'right' | 'start'
export type TextTransform = 'none' | 'uppercase' | 'lowercase'
export type TextOrientation = 'mixed' | 'upright' | 'sideways-right' | 'sideways' /* | 'use-glyph-orientation' */
export type TextDecorationLine = 'none' | 'underline' | 'line-through' | 'overline'
export type VerticalAlign = 'baseline' | 'top' | 'middle' | 'bottom' | 'sub' | 'super' | 'text-top' | 'text-bottom'
export type WritingMode = 'horizontal-tb' | 'vertical-lr' | 'vertical-rl'
export type Sizeable = `${number}%` | `${number}rem` | number

// listStyle
export type ListStyleType = 'none' | 'disc' /* 'decimal' | 'circle' | 'square' | 'georgian'  | 'trad-chinese-informal' | 'kannada' */
export type ListStyleImage = 'none' | string
export type ListStyleColormap = 'none' | Record<string, string>
export type ListStyleSize = 'cover' | Sizeable
export type ListStylePosition = 'inside' | 'outside'
export interface IDOCListStyleObject {
  type: ListStyleType
  image: ListStyleImage
  colormap: ListStyleColormap
  size: ListStyleSize
  position: ListStylePosition
}
export interface IDOCListStyleStyle {
  listStyle?: Partial<IDOCListStyleObject>
  listStyleType: ListStyleType
  listStyleImage: ListStyleImage
  listStyleColormap: ListStyleColormap
  listStyleSize: ListStyleSize
  listStylePosition: ListStylePosition
}

// highlight
export type HighlightLine = TextDecorationLine | 'outline'
export type HighlightImage = 'none' | string
export type HighlightReferImage = 'none' | string
export type HighlightColormap = 'none' | Record<string, string>
export type HighlightSize = 'cover' | Sizeable
export type HighlightThickness = Sizeable
export interface IDOCHighlightObject {
  image: HighlightImage
  referImage: HighlightReferImage
  colormap: HighlightColormap
  line: HighlightLine
  size: HighlightSize
  thickness: HighlightThickness
}
export interface IDOCHighlightStyle {
  highlight?: Partial<IDOCHighlightObject>
  highlightImage: HighlightImage
  highlightReferImage: HighlightReferImage
  highlightColormap: HighlightColormap
  highlightLine: HighlightLine
  highlightSize: HighlightSize
  highlightThickness: HighlightThickness
}

// shadow
export interface IDCOShadowObject {
  color: string
  offsetX: number
  offsetY: number
  blur: number
}
export interface IDOCShadowStyle {
  shadow?: Partial<IDCOShadowObject>
  shadowColor: string
  shadowOffsetX: number
  shadowOffsetY: number
  shadowBlur: number
}

// transform
export interface IDOCTransformStyle {
  scaleX: number
  scaleY: number
  skewX: number
  skewY: number
  translateX: number
  translateY: number
  transform: string
  transformOrigin: string
}

export interface IDOCTextLineStyle extends IDOCListStyleStyle {
  writingMode: WritingMode
  textWrap: TextWrap
  textAlign: TextAlign
  textIndent: number
  lineHeight: number
}

export interface IDOCTextInlineStyle extends IDOCHighlightStyle {
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
  textDecoration: TextDecorationLine
}

export interface IDOCTextDrawStyle extends IDOCShadowStyle, IDOCTransformStyle {
  textStrokeWidth: number
  textStrokeColor: string
}

export interface IDOCTextStyle extends IDOCTextLineStyle, IDOCTextInlineStyle, IDOCTextDrawStyle {
  //
}

export interface IDOCElementStyle extends IDOCShadowStyle, IDOCTransformStyle {
  overflow: Overflow
  visibility: Visibility
  filter: string
  // position
  left: number
  top: number
  width: number
  height: number
  rotate: number
  opacity: number
  // margin
  marginLeft: number
  marginTop: number
  marginRight: number
  marginBottom: number
  // padding
  paddingLeft: number
  paddingTop: number
  paddingRight: number
  paddingBottom: number
  // background
  backgroundImage: string
  backgroundColor: string
  // border
  borderRadius: number
  borderColor: string
  borderWidth: number
}

export interface IDOCStyleProp extends IDOCTextStyle, IDOCElementStyle {
  //
}
