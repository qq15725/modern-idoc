import type { IDOCStyleProp } from './IDOCStyleProp'

export interface IDOCFragmentContent extends Partial<IDOCStyleProp> {
  content: string
}

export interface IDOCParagraphContent extends Partial<IDOCStyleProp> {
  fragments: IDOCFragmentContent[]
}

export type IDOCFlatTextContent =
  | string
  | IDOCFragmentContent
  | IDOCParagraphContent
  | (string | IDOCFragmentContent)[]

export type IDOCTextContent =
  | string
  | IDOCFragmentContent
  | IDOCParagraphContent
  | IDOCFlatTextContent[]

export type IDOCNormalizedTextContent = IDOCParagraphContent[]

export interface IDOCTextObject {
  content: IDOCTextContent
  effects?: Partial<IDOCStyleProp>[]
  measureDom?: any // HTMLElement
  fonts?: any // modern-font > Fonts
}

export type IDOCTextProp =
  | string
  | IDOCTextContent
  | IDOCTextObject
