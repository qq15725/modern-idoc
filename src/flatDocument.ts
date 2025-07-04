import type { Element, NormalizedElement } from './element'
import { normalizeElement } from './element'

export type FlatElement = Omit<Element, 'children'> & {
  parentId?: string
  childrenIds?: string[]
}

export interface FlatDocument {
  fonts?: any
  children: Record<string, FlatElement>
}

export type NormalizedFlatElement = Omit<NormalizedElement, 'children'> & {
  parentId?: string
  childrenIds?: string[]
}

export interface NormalizedFlatDocument {
  fonts?: any
  children: Record<string, NormalizedFlatElement>
}

export function normalizeFlatDocument(doc: FlatDocument): NormalizedFlatDocument {
  const children: Record<string, NormalizedFlatElement> = {}
  for (const key in doc.children) {
    const value = normalizeElement(doc.children[key])
    delete value.children
    children[key] = value
  }
  return {
    ...doc,
    children,
  }
}
