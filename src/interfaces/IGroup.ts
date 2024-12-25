import type { IElement } from './IElement'
import type { IImage } from './IImage'
import type { IShape } from './IShape'
import type { IText } from './IText'

export type IGroupElement =
  | IImage
  | IText
  | IShape
  | IGroup

export interface IGroup extends IElement {
  children: IGroupElement[]
}
