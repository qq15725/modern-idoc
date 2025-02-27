import type { Noneable, Sizeable } from '../shared'

export type Overflow = 'hidden' | 'visible'
export type Visibility = 'hidden' | 'visible'
export type FontWeight = 'normal' | 'bold' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
export type FontStyle = 'normal' | 'italic' | 'oblique' | `oblique ${string}`
export type FontKerning = Noneable | 'auto' | 'normal'
export type TextWrap = 'wrap' | 'nowrap'
export type TextAlign = 'center' | 'end' | 'left' | 'right' | 'start'
export type TextTransform = Noneable | 'uppercase' | 'lowercase'
export type TextOrientation = 'mixed' | 'upright' | 'sideways-right' | 'sideways' /* | 'use-glyph-orientation' */
export type TextDecoration = Noneable | 'underline' | 'line-through' | 'overline'
export type VerticalAlign = 'baseline' | 'top' | 'middle' | 'bottom' | 'sub' | 'super' | 'text-top' | 'text-bottom'
export type WritingMode = 'horizontal-tb' | 'vertical-lr' | 'vertical-rl'
export type Align = 'auto' | 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline' | 'space-between' | 'space-around' | 'space-evenly'
export type FlexDirection = 'column' | 'column-reverse' | 'row' | 'row-reverse'
export type FlexWrap = 'nowrap' | 'wrap' | 'Wrap-reverse'
export type Justify = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
export type Position = 'static' | 'relative' | 'absolute'
export type BorderStyle = Noneable | 'dashed' | 'solid'
export type BoxSizing = 'border-box' | 'content-box'
export type PointerEvents = 'auto' | 'none'

// listStyle
export type ListStyleType = Noneable | 'disc' /* 'decimal' | 'circle' | 'square' | 'georgian'  | 'trad-chinese-informal' | 'kannada' */
export type ListStyleImage = Noneable | string
export type ListStyleColormap = Noneable | Record<string, string>
export type ListStyleSize = Sizeable | 'cover'
export type ListStylePosition = 'inside' | 'outside'

// highlight
export type HighlightLine = TextDecoration | 'outline'
export type HighlightImage = Noneable | string
export type HighlightReferImage = Noneable | string
export type HighlightColormap = Noneable | Record<string, string>
export type HighlightSize = Sizeable | 'cover'
export type HighlightThickness = Sizeable
