import type { AudioProperty, NormalizedAudio } from './audio'
import type { BackgroundProperty, NormalizedBackground } from './background'
import type { EffectProperty, NormalizedEffect } from './effect'
import type { FillProperty, NormalizedFill } from './fill'
import type { ForegroundProperty, NormalizedForeground } from './foreground'
import type { MetaProperty } from './meta'
import type { Node } from './node'
import type { NormalizedOutline, OutlineProperty } from './outline'
import type { NormalizedShadow, ShadowProperty } from './shadow'
import type { NormalizedShape, ShapeProperty } from './shape'
import type { NormalizedStyle, StyleProperty } from './style'
import type { NormalizedText, TextProperty } from './text'
import type { WithNone } from './types'
import type { NormalizedVideo, VideoProperty } from './video'
import { normalizeAudio } from './audio'
import { normalizeBackground } from './background'
import { normalizeEffect } from './effect'
import { normalizeFill } from './fill'
import { normalizeForeground } from './foreground'
import { normalizeOutline } from './outline'
import { normalizeShadow } from './shadow'
import { normalizeShape } from './shape'
import { normalizeStyle } from './style'
import { normalizeText } from './text'
import { clearUndef, isNone } from './utils'
import { normalizeVideo } from './video'

export interface Element<T = MetaProperty> extends Node<T> {
  style?: WithNone<StyleProperty>
  text?: WithNone<TextProperty>
  background?: WithNone<BackgroundProperty>
  shape?: WithNone<ShapeProperty>
  fill?: WithNone<FillProperty>
  outline?: WithNone<OutlineProperty>
  foreground?: WithNone<ForegroundProperty>
  shadow?: WithNone<ShadowProperty>
  video?: WithNone<VideoProperty>
  audio?: WithNone<AudioProperty>
  effect?: WithNone<EffectProperty>
  children?: Element[]
}

export type NormalizedElement<T = MetaProperty> = Node<T> & {
  style?: Partial<NormalizedStyle>
  text?: NormalizedText
  background?: NormalizedBackground
  shape?: NormalizedShape
  fill?: NormalizedFill
  outline?: NormalizedOutline
  foreground?: NormalizedForeground
  shadow?: NormalizedShadow
  video?: NormalizedVideo
  audio?: NormalizedAudio
  effect?: NormalizedEffect
  children?: NormalizedElement[]
}

export function normalizeElement<T = MetaProperty>(element: Element<T>): NormalizedElement<T> {
  return clearUndef({
    ...element,
    style: isNone(element.style) ? undefined : normalizeStyle(element.style),
    text: isNone(element.text) ? undefined : normalizeText(element.text),
    background: isNone(element.background) ? undefined : normalizeBackground(element.background),
    shape: isNone(element.shape) ? undefined : normalizeShape(element.shape),
    fill: isNone(element.fill) ? undefined : normalizeFill(element.fill),
    outline: isNone(element.outline) ? undefined : normalizeOutline(element.outline),
    foreground: isNone(element.foreground) ? undefined : normalizeForeground(element.foreground),
    shadow: isNone(element.shadow) ? undefined : normalizeShadow(element.shadow),
    video: isNone(element.video) ? undefined : normalizeVideo(element.video),
    audio: isNone(element.audio) ? undefined : normalizeAudio(element.audio),
    effect: isNone(element.effect) ? undefined : normalizeEffect(element.effect),
    children: element.children?.map(child => normalizeElement(child)),
  })
}
