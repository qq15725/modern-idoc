import type { IBackground } from './IBackground'
import type { IElementStyle } from './IElementStyle'

export interface IElement<T extends IElementStyle = IElementStyle> {
  name?: string
  style?: Partial<T>
  background?: IBackground
  meta?: Record<string, any>
}
