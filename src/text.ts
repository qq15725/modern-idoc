import type { StylePropertyObject } from './style'
import { normalizeStyle } from './style'

export interface FragmentContent extends StylePropertyObject {
  content: string
}

export interface ParagraphContent extends StylePropertyObject {
  fragments: FragmentContent[]
}

export type TextContentFlat =
  | string
  | FragmentContent
  | ParagraphContent
  | (string | FragmentContent)[]

export type TextContent =
  | string
  | FragmentContent
  | ParagraphContent
  | TextContentFlat[]

export type TextContentDeclaration = (ParagraphContent & StylePropertyObject)[]

export interface TextDeclaration {
  content: TextContentDeclaration
  effects?: StylePropertyObject[]
  measureDom?: any // HTMLElement
  fonts?: any // modern-font > Fonts
}

export type TextProperty =
  | string
  | TextContent
  | (TextDeclaration & { content: TextContent })
  | TextDeclaration

export function normalizeTextContent(content: TextContent = ''): TextContentDeclaration {
  const list: TextContentFlat[] = Array.isArray(content) ? content : [content]
  return list.map((p) => {
    if (typeof p === 'string') {
      return {
        fragments: [
          { content: p },
        ],
      }
    }
    else if ('content' in p) {
      return {
        fragments: [
          normalizeStyle(p),
        ],
      }
    }
    else if ('fragments' in p) {
      return {
        ...normalizeStyle(p),
        fragments: p.fragments.map(f => normalizeStyle(f) as any),
      }
    }
    else if (Array.isArray(p)) {
      return {
        fragments: p.map((f) => {
          if (typeof f === 'string') {
            return {
              content: f,
            }
          }
          else {
            return normalizeStyle(f) as any
          }
        }),
      }
    }
    else {
      return {
        fragments: [],
      }
    }
  })
}

export function normalizeText(text: TextProperty): TextDeclaration {
  if (typeof text === 'string') {
    return {
      content: [
        {
          fragments: [
            { content: text },
          ],
        },
      ],
    }
  }
  else if ('content' in text) {
    return {
      ...text,
      content: normalizeTextContent(text.content),
    }
  }
  else {
    return {
      content: normalizeTextContent(text),
    }
  }
}
