import type { IElement } from './IElement'
import type { IImage } from './IImage'
import type { IShape } from './IShape'
import type { IText } from './IText'
import type { IVideo } from './IVideo'

export type IElementChild =
  | IElement
  | IImage
  | IText
  | IVideo
  | IShape
