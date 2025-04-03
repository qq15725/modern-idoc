import type { IDOCElement, IDOCElementDeclaration } from './element'
import { normalizeElement } from './element'

export interface IDOCDocument extends IDOCElement {
  fonts?: any // modern-font > Fonts
}

export interface IDOCDocumentDeclaration extends IDOCElementDeclaration {
  fonts?: any
}

export function normalizeDocument(doc: IDOCDocument): IDOCDocumentDeclaration {
  return normalizeElement(doc)
}
