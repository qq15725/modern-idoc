import type { IDOCStyleDeclaration } from './IDOCStyleDeclaration'

export interface IDOCFragmentContent extends Partial<IDOCStyleDeclaration> {
  content: string
}

export interface IDOCParagraphContent extends Partial<IDOCStyleDeclaration> {
  fragments: IDOCFragmentContent[]
}

export type IDOCTextContentFlat =
  | string
  | IDOCFragmentContent
  | IDOCParagraphContent
  | (string | IDOCFragmentContent)[]

export type IDOCTextContent =
  | string
  | IDOCFragmentContent
  | IDOCParagraphContent
  | IDOCTextContentFlat[]

export type IDOCTextContentDeclaration = IDOCParagraphContent[]

export interface IDOCTextDeclaration {
  content: IDOCTextContentDeclaration
  effects?: Partial<IDOCStyleDeclaration>[]
  measureDom?: any // HTMLElement
  fonts?: any // modern-font > Fonts
}
