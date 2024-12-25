import type { IElement } from './IElement'

export interface IImage extends IElement {
  type: 'image'
  src: string
}
