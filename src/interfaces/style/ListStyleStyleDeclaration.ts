import type { ListStyleDeclaration } from './ListStyleDeclaration'
import type {
  ListStyleColormap,
  ListStyleImage,
  ListStylePosition,
  ListStyleSize,
  ListStyleType,
} from './types'

export interface ListStyleStyleDeclaration {
  listStyle?: Partial<ListStyleDeclaration>
  listStyleType: ListStyleType
  listStyleImage: ListStyleImage
  listStyleColormap: ListStyleColormap
  listStyleSize: ListStyleSize
  listStylePosition: ListStylePosition
}
