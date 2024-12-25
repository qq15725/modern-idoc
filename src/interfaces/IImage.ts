import type { IElementType } from '../constants'
import type { IBaseElement } from './IBaseElement'

export interface IImage extends IBaseElement {
  type: IElementType.image
  src: string
}