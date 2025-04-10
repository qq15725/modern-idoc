import type { AudioDeclaration, AudioProperty } from './audio'
import type { BackgroundDeclaration, BackgroundProperty } from './background'
import type { FillDeclaration, FillProperty } from './fill'
import type { ForegroundDeclaration, ForegroundProperty } from './foreground'
import type { GeometryDeclaration, GeometryProperty } from './geometry'
import type { MetaProperty } from './meta'
import type { Node } from './node'
import type { OutlineDeclaration, OutlineProperty } from './outline'
import type { ShadowDeclaration, ShadowProperty } from './shadow'
import type { StyleProperty } from './style'
import type { TextDeclaration, TextProperty } from './text'
import type { VideoDeclaration, VideoProperty } from './video'
import { normalizeBackground } from './background'
import { normalizeFill } from './fill'
import { normalizeForeground } from './foreground'
import { normalizeGeometry } from './geometry'
import { normalizeOutline } from './outline'
import { normalizeShadow } from './shadow'
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
  children?: Element[]
}

export interface ElementDeclaration<T = MetaProperty> extends Element<T> {
  text?: TextDeclaration
  background?: BackgroundDeclaration
  geometry?: GeometryDeclaration
  fill?: FillDeclaration
  outline?: OutlineDeclaration
  foreground?: ForegroundDeclaration
  shadow?: ShadowDeclaration
  video?: VideoDeclaration
  audio?: AudioDeclaration
  children?: ElementDeclaration[]
}

export function normalizeElement<T = MetaProperty>(element: Element<T>): ElementDeclaration<T> {
  return clearUndef({
    ...element,
    text: normalizeText(element.text),
    background: normalizeBackground(element.background),
    geometry: normalizeGeometry(element.geometry),
    fill: normalizeFill(element.fill),
    outline: normalizeOutline(element.outline),
    foreground: normalizeForeground(element.foreground),
    shadow: normalizeShadow(element.shadow),
    video: normalizeVideo(element.video),
    audio: normalizeVideo(element.audio),
    children: element.children?.map(child => normalizeElement(child)),
  })
}
