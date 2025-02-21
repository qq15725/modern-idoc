import type { StyleDeclaration } from './style'

export interface FragmentContent extends Partial<StyleDeclaration> {
  content: string
}

export interface ParagraphContent extends Partial<StyleDeclaration> {
  fragments: FragmentContent[]
}

export type TextContentFlat =
  | string
  | FragmentContent
  | ParagraphContent
  | (string | FragmentContent)[]

export type TextContent =
  | string
  | FragmentContent
  | ParagraphContent
  | TextContentFlat[]

export type TextContentDeclaration = ParagraphContent[]

export interface TextDeclaration {
  content: TextContentDeclaration
  effects?: Partial<StyleDeclaration>[]
  measureDom?: any // HTMLElement
  fonts?: any // modern-font > Fonts
}

export type TextProp =
  | string
  | TextContent
  | (TextDeclaration & { content: TextContent })
  | TextDeclaration
