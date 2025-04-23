import type { ListStyleColormap, ListStyleImage, ListStylePosition, ListStyleSize, ListStyleType } from './types'

export interface ListStyleDeclaration {
  type: ListStyleType
  image: ListStyleImage
  colormap: ListStyleColormap
  size: ListStyleSize
  position: ListStylePosition
}

export interface ListStyleStyleDeclaration {
  listStyle: Partial<ListStyleDeclaration>
  listStyleType: ListStyleType
  listStyleImage: ListStyleImage
  listStyleColormap: ListStyleColormap
  listStyleSize: ListStyleSize
  listStylePosition: ListStylePosition
}

export function getDefaultListStyleStyle(): ListStyleStyleDeclaration {
  return {
    listStyle: {},
    listStyleType: 'none',
    listStyleImage: 'none',
    listStyleColormap: 'none',
    listStyleSize: 'cover',
    listStylePosition: 'outside',
  }
}
