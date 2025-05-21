import type { AudioDeclaration, AudioProperty } from './audio'
import type { BackgroundDeclaration, BackgroundProperty } from './background'
import type { EffectDeclaration, EffectProperty } from './effect'
import type { FillDeclaration, FillProperty } from './fill'
import type { ForegroundDeclaration, ForegroundProperty } from './foreground'
import type { GeometryDeclaration, GeometryProperty } from './geometry'
import type { MetaProperty } from './meta'
import type { Node } from './node'
import type { OutlineDeclaration, OutlineProperty } from './outline'
import type { ShadowDeclaration, ShadowProperty } from './shadow'
import type { StyleDeclaration, StyleProperty } from './style'
import type { TextDeclaration, TextProperty } from './text'
import type { WithNone } from './types'
import type { VideoDeclaration, VideoProperty } from './video'
import { normalizeAudio } from './audio'
import { normalizeBackground } from './background'
import { normalizeEffect } from './effect'
import { normalizeFill } from './fill'
import { normalizeForeground } from './foreground'
import { normalizeGeometry } from './geometry'
import { normalizeOutline } from './outline'
import { normalizeShadow } from './shadow'
import { normalizeStyle } from './style'
import { normalizeText } from './text'
import { clearUndef, isNone } from './utils'
import { normalizeVideo } from './video'

export interface Element<T = MetaProperty> extends Node<T> {
  style?: WithNone<StyleProperty>
  text?: WithNone<TextProperty>
  background?: WithNone<BackgroundProperty>
  geometry?: WithNone<GeometryProperty>
  fill?: WithNone<FillProperty>
  outline: WithNone<OutlineProperty>
  foreground?: WithNone<ForegroundProperty>
  shadow?: WithNone<ShadowProperty>
  video?: WithNone<VideoProperty>
  audio?: WithNone<AudioProperty>
  effect?: WithNone<EffectProperty>
  children?: Element[]
}

export type ElementDeclaration<T = MetaProperty> = Node<T> & {
  style?: Partial<StyleDeclaration>
  text?: TextDeclaration
  background?: BackgroundDeclaration
  geometry?: GeometryDeclaration
  fill?: FillDeclaration
  outline?: OutlineDeclaration
  foreground?: ForegroundDeclaration
  shadow?: ShadowDeclaration
  video?: VideoDeclaration
  audio?: AudioDeclaration
  effect?: EffectDeclaration
  children?: ElementDeclaration[]
}

export function normalizeElement<T = MetaProperty>(element: Element<T>): ElementDeclaration<T> {
  return clearUndef({
    ...element,
    style: isNone(element.style) ? undefined : normalizeStyle(element.style),
    text: isNone(element.text) ? undefined : normalizeText(element.text),
    background: isNone(element.background) ? undefined : normalizeBackground(element.background),
    geometry: isNone(element.geometry) ? undefined : normalizeGeometry(element.geometry),
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
