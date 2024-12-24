import type { IElementStyle } from './IElementStyle'

export interface IElement<T extends IElementStyle = IElementStyle> {
  name?: string
  style?: Partial<T>
}
