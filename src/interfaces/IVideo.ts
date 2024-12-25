import type { IElement } from './IElement'

export interface IVideo extends IElement {
  type: 'video'
  src: string
}
