import type { StyleDeclaration, StylePropertyObject } from './style'

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

export type TextContentDeclaration = (ParagraphContent & Partial<StyleDeclaration>)[]

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
          { ...p },
        ],
      }
    }
    else if ('fragments' in p) {
      return {
        ...p,
        fragments: p.fragments.map(f => ({ ...f })),
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
            return { ...f }
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

export function normalizeText(text?: TextProperty): TextDeclaration | undefined {
  if (!text || text === 'none') {
    return undefined
  }
  else if (typeof text === 'string') {
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
