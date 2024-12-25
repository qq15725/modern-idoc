import type { IElement } from './IElement'
import type { ITextStyle } from './ITextStyle'

export interface IFragmentContent extends Partial<ITextStyle> {
  content: string
}

export interface IParagraphContent extends Partial<ITextStyle> {
  fragments: IFragmentContent[]
}

export type ITextContent =
  | string
  | IFragmentContent
  | IParagraphContent
  | (string | IFragmentContent | IParagraphContent | (string | IFragmentContent)[])[]

export interface IText extends IElement<ITextStyle> {
  type: 'text'
  content: ITextContent
  effects?: Partial<ITextStyle>[]
  measureDom?: any // HTMLElement
  fonts?: any // modern-font > Fonts
}
