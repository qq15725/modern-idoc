import type { NormalizedColor } from '../color'
import type { NormalizedShadowStyle } from '../shadow'
import type { WithStyleNone } from '../types'
import type { NormalizedLayoutStyle } from './layoutStyle'
import type { NormalizedTransformStyle } from './transformStyle'
import type { BorderStyle, PointerEvents, Visibility } from './types'
import { getDefaultShadowStyle } from '../shadow'
import { getDefaultLayoutStyle } from './layoutStyle'
import { getDefaultTransformStyle } from './transformStyle'

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
    backgroundImage: WithStyleNone<string>
    backgroundSize: BackgroundSize
    backgroundColor: WithStyleNone<NormalizedColor>
    backgroundColormap: WithStyleNone<Record<string, string>>
    // border
    borderRadius: number
    borderColor: WithStyleNone<NormalizedColor>
    borderStyle: BorderStyle
    // outline
    outlineWidth: number
    outlineOffset: number
    outlineColor: WithStyleNone<NormalizedColor>
    outlineStyle: string
    // other
    visibility: Visibility
    filter: string
    opacity: number
    pointerEvents: PointerEvents
    maskImage: WithStyleNone<string>
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
