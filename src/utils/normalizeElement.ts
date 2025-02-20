import type { ElementDeclaration, IDOCElement } from '../interfaces'
import { normalizeFill } from './normalizeFill'
import { normalizeGeometry } from './normalizeGeometry'
import { normalizeImage } from './normalizeImage'
import { normalizeStroke } from './normalizeStroke'
import { normalizeText } from './normalizeText'
import { normalizeVideo } from './normalizeVideo'

export function normalizeElement(element: IDOCElement): ElementDeclaration {
  return {
    ...element,
    image: normalizeImage(element.image),
    video: normalizeVideo(element.video),
    text: normalizeText(element.text),
    geometry: normalizeGeometry(element.geometry),
    fill: normalizeFill(element.fill),
    stroke: normalizeStroke(element.stroke),
    children: element.children?.map(child => normalizeElement(child)),
  }
}
