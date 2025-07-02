import type { Audio, NormalizedAudio } from './audio'
import type { Background, NormalizedBackground } from './background'
import type { Effect, NormalizedEffect } from './effect'
import type { Fill, NormalizedFill } from './fill'
import type { Foreground, NormalizedForeground } from './foreground'
import type { Meta } from './meta'
import type { Node } from './node'
import type { NormalizedOutline, Outline } from './outline'
import type { NormalizedShadow, Shadow } from './shadow'
import type { NormalizedShape, Shape } from './shape'
import type { NormalizedStyle, Style } from './style'
import type { NormalizedText, Text } from './text'
import type { WithNone } from './types'
import type { NormalizedVideo, Video } from './video'
import { normalizeAudio } from './audio'
import { normalizeBackground } from './background'
import { normalizeEffect } from './effect'
import { normalizeFill } from './fill'
import { normalizeForeground } from './foreground'
import { idGenerator } from './id'
import { normalizeOutline } from './outline'
import { normalizeShadow } from './shadow'
import { normalizeShape } from './shape'
import { normalizeStyle } from './style'
import { normalizeText } from './text'
import { clearUndef, isNone } from './utils'
import { normalizeVideo } from './video'

export interface Element<T = Meta> extends Node<T> {
  id?: string
  style?: WithNone<Style>
  text?: WithNone<Text>
  background?: WithNone<Background>
  shape?: WithNone<Shape>
  fill?: WithNone<Fill>
  outline?: WithNone<Outline>
  foreground?: WithNone<Foreground>
  shadow?: WithNone<Shadow>
  video?: WithNone<Video>
  audio?: WithNone<Audio>
  effect?: WithNone<Effect>
  children?: Element[]
}

export type NormalizedElement<T = Meta> = Node<T> & {
  id: string
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

export function normalizeElement<T = Meta>(element: Element<T>): NormalizedElement<T> {
  return clearUndef({
    ...element,
    id: element.id ?? idGenerator(),
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
