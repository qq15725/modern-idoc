import type { IBackgroundStyle } from './IBackgroundStyle'

export interface IBackground extends Partial<IBackgroundStyle> {
  src: string
}
