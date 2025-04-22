import type { ListStyleColormap, ListStyleImage, ListStylePosition, ListStyleSize, ListStyleType } from './types'

export interface ListStyleDeclaration {
  type: ListStyleType
  image: ListStyleImage
  colormap: ListStyleColormap
  size: ListStyleSize
  position: ListStylePosition
}

export type ListStyleStyleDeclaration = Partial<{
  listStyle: Partial<ListStyleDeclaration>
  listStyleType: ListStyleType
  listStyleImage: ListStyleImage
  listStyleColormap: ListStyleColormap
  listStyleSize: ListStyleSize
  listStylePosition: ListStylePosition
}>

export function getDefaultListStyleStyle(): Required<ListStyleStyleDeclaration> {
  return {
    listStyle: {},
    listStyleType: 'none',
    listStyleImage: 'none',
    listStyleColormap: 'none',
    listStyleSize: 'cover',
    listStylePosition: 'outside',
  }
}
