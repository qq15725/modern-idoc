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
import { clearUndef } from './utils'
import { normalizeVideo } from './video'

export interface Element<T = MetaProperty> extends Node<T> {
  style?: StyleProperty
  text?: TextProperty
  background?: BackgroundProperty
  geometry?: GeometryProperty
  fill?: FillProperty
  outline?: OutlineProperty
  foreground?: ForegroundProperty
  shadow?: ShadowProperty
  video?: VideoProperty
  audio?: AudioProperty
  effect?: EffectProperty
  children?: Element[]
}

export interface ElementDeclaration<T = MetaProperty> extends Element<T> {
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
    style: normalizeStyle(element.style),
    text: normalizeText(element.text),
    background: normalizeBackground(element.background),
    geometry: normalizeGeometry(element.geometry),
    fill: normalizeFill(element.fill),
    outline: normalizeOutline(element.outline),
    foreground: normalizeForeground(element.foreground),
    shadow: normalizeShadow(element.shadow),
    video: normalizeVideo(element.video),
    audio: normalizeAudio(element.audio),
    effect: normalizeEffect(element.effect),
    children: element.children?.map(child => normalizeElement(child)),
  })
}
