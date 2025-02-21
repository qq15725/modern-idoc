import type { IDOCElement, IDOCElementDeclaration } from './IDOCElement'

export interface IDOCDocument extends IDOCElement {
  fonts?: any // modern-font > Fonts
}

export interface IDOCDocumentDeclaration extends IDOCElementDeclaration {
  fonts?: any
}
