import type { None } from '../types'

export type StyleUnit = `${number}%` | number

export type Display = 'flex' | 'contents'
export type Direction = 'inherit' | 'ltr' | 'rtl'
export type Overflow = 'hidden' | 'visible'
export type Visibility = 'hidden' | 'visible'
export type FontWeight = 'normal' | 'bold' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
export type FontStyle = 'normal' | 'italic' | 'oblique' | `oblique ${string}`
export type FontKerning = None | 'auto' | 'normal'
export type TextWrap = 'wrap' | 'nowrap'
export type TextAlign = None | 'center' | 'end' | 'left' | 'right' | 'start' | 'justify'
export type TextTransform = None | 'uppercase' | 'lowercase'
export type TextOrientation = 'mixed' | 'upright' | 'sideways-right' | 'sideways' /* | 'use-glyph-orientation' */
export type TextDecoration = None | 'underline' | 'line-through' | 'overline'
export type VerticalAlign = 'baseline' | 'top' | 'middle' | 'bottom' | 'sub' | 'super' | 'text-top' | 'text-bottom'
export type WritingMode = 'horizontal-tb' | 'vertical-lr' | 'vertical-rl'
export type Align = 'auto' | 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline' | 'space-between' | 'space-around' | 'space-evenly'
export type FlexDirection = 'column' | 'column-reverse' | 'row' | 'row-reverse'
export type FlexWrap = 'nowrap' | 'wrap' | 'Wrap-reverse'
export type Justify = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
export type Position = 'static' | 'relative' | 'absolute'
export type BorderStyle = None | 'dashed' | 'solid'
export type BoxSizing = 'border-box' | 'content-box'
export type PointerEvents = 'auto' | 'none'

// listStyle
export type ListStyleType = None | 'disc' /* 'decimal' | 'circle' | 'square' | 'georgian'  | 'trad-chinese-informal' | 'kannada' */
export type ListStyleImage = None | string
export type ListStyleColormap = None | Record<string, string>
export type ListStyleSize = StyleUnit | `${number}rem` | 'cover'
export type ListStylePosition = 'inside' | 'outside'

// highlight
export type HighlightLine = TextDecoration | 'outline'
export type HighlightImage = None | string
export type HighlightReferImage = None | string
export type HighlightColormap = None | Record<string, string>
export type HighlightSize = StyleUnit | `${number}rem` | 'cover'
export type HighlightThickness = StyleUnit
