import type { NormalizedColor } from '../color'
import type { NormalizedShadowStyle } from '../shadow'
import type { WithNone } from '../types'
import type { NormalizedLayoutStyle } from './layout-style'
import type { NormalizedTransformStyle } from './transform-style'
import type { BorderStyle, PointerEvents, Visibility } from './types'
import { getDefaultShadowStyle } from '../shadow'
import { getDefaultLayoutStyle } from './layout-style'
import { getDefaultTransformStyle } from './transform-style'

export type BackgroundSize =
  | 'contain' | 'cover' | string
  // custom
  | 'stretch' | 'rigid'

export type NormalizedElementStyle =
  & Partial<NormalizedLayoutStyle>
  & NormalizedTransformStyle
  & NormalizedShadowStyle
  & {
  // background
    backgroundImage: WithNone<string>
    backgroundSize: BackgroundSize
    backgroundColor: WithNone<NormalizedColor>
    backgroundColormap: WithNone<Record<string, string>>
    // border
    borderRadius: number
    borderColor: WithNone<NormalizedColor>
    borderStyle: BorderStyle
    // outline
    outlineWidth: number
    outlineOffset: number
    outlineColor: WithNone<NormalizedColor>
    outlineStyle: string
    // other
    visibility: Visibility
    filter: string
    opacity: number
    pointerEvents: PointerEvents
    maskImage: WithNone<string>
  }

export function getDefaultElementStyle(): NormalizedElementStyle {
  return {
    ...getDefaultLayoutStyle(),
    ...getDefaultTransformStyle(),
    ...getDefaultShadowStyle(),
    // background
    backgroundImage: 'none',
    backgroundSize: 'auto, auto',
    backgroundColor: 'none',
    backgroundColormap: 'none',
    // border
    borderRadius: 0,
    borderColor: 'none',
    borderStyle: 'solid',
    // outline
    outlineWidth: 0,
    outlineOffset: 0,
    outlineColor: 'rgb(0, 0, 0)',
    outlineStyle: 'none',
    // other
    visibility: 'visible',
    filter: 'none',
    opacity: 1,
    pointerEvents: 'auto',
    maskImage: 'none',
  }
}
