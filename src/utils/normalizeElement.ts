import type { IDOCElement, IDOCElementDeclaration } from '../interfaces'
import { clearUndef } from './helper'
import { normalizeAudio } from './normalizeAudio'
import { normalizeFill } from './normalizeFill'
import { normalizeGeometry } from './normalizeGeometry'
import { normalizeImage } from './normalizeImage'
import { normalizeOutline } from './normalizeOutline'
import { normalizeShadow } from './normalizeShadow'
import { normalizeText } from './normalizeText'
import { normalizeVideo } from './normalizeVideo'

export function normalizeElement(element: IDOCElement): IDOCElementDeclaration {
  return clearUndef({
    ...element,
    image: normalizeImage(element.image),
    video: normalizeVideo(element.video),
    audio: normalizeAudio(element.audio),
    text: normalizeText(element.text),
    geometry: normalizeGeometry(element.geometry),
    fill: normalizeFill(element.fill),
    outline: normalizeOutline(element.outline),
    shadow: normalizeShadow(element.shadow),
    children: element.children?.map(child => normalizeElement(child)),
  })
}
