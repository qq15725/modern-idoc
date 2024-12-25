import type { IGroup } from './IGroup'
import type { IImage } from './IImage'
import type { IShape } from './IShape'
import type { IText } from './IText'
import type { IVideo } from './IVideo'

export type IElement =
  | IImage
  | IText
  | IShape
  | IVideo
  | IGroup
