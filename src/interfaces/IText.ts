import type { IElementType } from '../constants'
import type { IBaseElement } from './IBaseElement'
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

export interface IText extends IBaseElement<ITextStyle> {
  type: IElementType.text
  content: ITextContent
}
