import type { Element, ElementDeclaration } from './element'
import { normalizeElement } from './element'

export interface Document extends Element {
  fonts?: any // modern-font > Fonts
}

export interface DocumentDeclaration extends ElementDeclaration {
  fonts?: any
}

export function normalizeDocument(doc: Document): DocumentDeclaration {
  return normalizeElement(doc)
}
