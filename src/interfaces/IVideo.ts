import type { IElementType } from '../constants'
import type { IBaseElement } from './IBaseElement'

export interface IVideo extends IBaseElement {
  type: IElementType.video
  src: string
}
