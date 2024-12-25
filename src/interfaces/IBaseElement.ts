import type { IBackground } from './IBackground'
import type { IBaseElementStyle } from './IBaseElementStyle'

export interface IBaseElement<T extends IBaseElementStyle = IBaseElementStyle> {
  name?: string
  style?: Partial<T>
  background?: IBackground
  meta?: Record<string, any>
}
