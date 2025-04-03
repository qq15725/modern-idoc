import type { BackgroundDeclaration, BackgroundProperty } from './background'
import type { FillDeclaration, FillProperty } from './fill'
import type { GeometryDeclaration, GeometryProperty } from './geometry'
import type { IDOCNode } from './node'
import type { OutlineDeclaration, OutlineProperty } from './outline'
import type { ShadowDeclaration, ShadowProperty } from './shadow'
import type { StyleProperty } from './style'
import type { TextDeclaration, TextProperty } from './text'
import { normalizeBackground } from './background'
import { normalizeFill } from './fill'
import { normalizeGeometry } from './geometry'
import { normalizeOutline } from './outline'
import { normalizeShadow } from './shadow'
import { normalizeText } from './text'
import { clearUndef } from './utils'

export interface IDOCElement extends IDOCNode {
  style?: StyleProperty
  text?: TextProperty
  geometry?: GeometryProperty
  fill?: FillProperty
  outline?: OutlineProperty
  background?: BackgroundProperty
  shadow?: ShadowProperty
  children?: IDOCElement[]
}

export interface IDOCElementDeclaration extends IDOCElement {
  text?: TextDeclaration
  geometry?: GeometryDeclaration
  fill?: FillDeclaration
  outline?: OutlineDeclaration
  background?: BackgroundDeclaration
  shadow?: ShadowDeclaration
  children?: IDOCElementDeclaration[]
}

export function normalizeElement(element: IDOCElement): IDOCElementDeclaration {
  return clearUndef({
    ...element,
    background: normalizeBackground(element.background),
    text: normalizeText(element.text),
    geometry: normalizeGeometry(element.geometry),
    fill: normalizeFill(element.fill),
    outline: normalizeOutline(element.outline),
    shadow: normalizeShadow(element.shadow),
    children: element.children?.map(child => normalizeElement(child)),
  })
}
