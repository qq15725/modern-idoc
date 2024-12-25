import type { IElementType } from '../constants'
import type { IBaseElement } from './IBaseElement'
import type { IElement } from './IElement'

export interface IGroup extends IBaseElement {
  type: IElementType.group
  children: IElement[]
}
