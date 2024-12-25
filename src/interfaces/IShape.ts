import type { IElementType } from '../constants'
import type { IBaseElement } from './IBaseElement'
import type { IPath } from './IPath'

export interface IShape extends IBaseElement {
  type: IElementType.shape
  paths: IPath[]
}
