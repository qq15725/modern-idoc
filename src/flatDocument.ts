import type { Document } from './document'
import type { Element, NormalizedElement } from './element'
import { normalizeElement } from './element'

export interface FlatElement extends Omit<Element, 'children'> {
  parentId?: string
  childrenIds?: string[]
}

export interface FlatDocument extends Omit<Element, 'children'> {
  fonts?: any // runtime: modern-font Fonts
  children: Record<string, FlatElement>
}

export interface NormalizedFlatElement extends Omit<NormalizedElement, 'children'> {
  parentId?: string
  childrenIds?: string[]
}

export interface NormalizedFlatDocument {
  fonts?: any // runtime: modern-font Fonts
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

export function flatDocumentToDocument(flatDoc: FlatDocument): Document {
  const { children, ...restProps } = flatDoc

  function toElement(flatElement: FlatElement): Element {
    const { parentId, childrenIds, ...element } = flatElement
    return {
      ...element,
      children: [],
    }
  }

  const docElementMap: Record<string, Element> = {}
  const docChildren: Element[] = []
  const doc: Document = { ...restProps, children: docChildren }
  for (const id in children) {
    if (docElementMap[id]) {
      continue
    }
    const flatElement = children[id]
    const element = toElement(flatElement)
    docElementMap[id] = element
    const parentId = flatElement.parentId
    if (parentId) {
      const flatParnet = children[parentId]
      let parnet = docElementMap[parentId]
      if (!parnet) {
        if (children[parentId]) {
          parnet = toElement(children[parentId])
          docElementMap[parentId] = parnet
        }
      }
      if (flatParnet?.childrenIds && parnet?.children) {
        parnet.children.splice(flatParnet.childrenIds.indexOf(id), 0, element)
      }
    }
    else {
      docChildren.push(element)
    }
  }
  return doc
}
