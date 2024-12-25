import type { IBackground } from './IBackground'
import type { IElementChild } from './IElementChild'
import type { IElementMeta } from './IElementMeta'
import type { IElementStyle } from './IElementStyle'

export interface IElement<T = IElementStyle> {
  name?: string
  style?: Partial<T>
  background?: IBackground
  meta?: IElementMeta
  children?: IElementChild[]
}
