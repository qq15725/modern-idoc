import type { IBaseElement } from './IBaseElement'
import type { IElement } from './IElement'

export interface IDoc extends IBaseElement {
  children: IElement[]
}
