import type {
  ListStyleColormap,
  ListStyleImage,
  ListStylePosition,
  ListStyleSize,
  ListStyleType,
} from './types'

export interface ListStyleDeclaration {
  type: ListStyleType
  image: ListStyleImage
  colormap: ListStyleColormap
  size: ListStyleSize
  position: ListStylePosition
}
