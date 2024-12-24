import type { IElement } from './IElement'
import type { IPath } from './IPath'

export interface IShape extends IElement {
  type: 'shape'
  paths: IPath[]
}
