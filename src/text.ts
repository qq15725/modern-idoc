import type { StyleObject } from './style'
import { normalizeStyle } from './style'

export interface FragmentObject extends StyleObject {
  content: string
}

export interface ParagraphObject extends StyleObject {
  fragments: FragmentObject[]
}

export type FlatTextContent =
  | string
  | FragmentObject
  | ParagraphObject
  | (string | FragmentObject)[]

export type TextContent =
  | FlatTextContent
  | FlatTextContent[]

export type NormalizedTextContent = ParagraphObject[]

export interface NormalizedText {
  content: NormalizedTextContent
  style?: StyleObject
  effects?: StyleObject[]
  measureDom?: any // HTMLElement
  fonts?: any // modern-font > Fonts
}

export type Text =
  | string
  | (Omit<NormalizedText, 'content'> & { content: TextContent })

const CRLF_RE = /\r\n|\n\r|\n|\r/
const NORMALIZE_CRLF_RE = new RegExp(`${CRLF_RE.source}|<br\\/>`, 'g')
// eslint-disable-next-line regexp/no-unused-capturing-group
const IS_CRLF_RE = new RegExp(`^(${CRLF_RE.source})$`)
const NORMALIZED_CRLF = '\n'

export function hasCRLF(content: string): boolean {
  return CRLF_RE.test(content)
}

export function isCRLF(char: string): boolean {
  return IS_CRLF_RE.test(char)
}

export function normalizeCRLF(content: string): string {
  return content.replace(NORMALIZE_CRLF_RE, NORMALIZED_CRLF)
}

export function isEqualStyle(style1: Record<string, any>, style2: Record<string, any>): boolean {
  const keys = Array.from(new Set([...Object.keys(style1), ...Object.keys(style2)]))
  return !keys.length || keys.every(key => style1[key] === style2[key])
}

export function normalizeTextContent(value: TextContent): NormalizedTextContent {
  const paragraphs: ParagraphObject[] = []

  function lastParagraph(): ParagraphObject | undefined {
    return paragraphs[paragraphs.length - 1]
  }

  function addParagraph(style: StyleObject = {}): ParagraphObject {
    let paragraph = paragraphs[paragraphs.length - 1]
    if (paragraph?.fragments.length === 0) {
      paragraph = { ...style, fragments: [] }
      paragraphs[paragraphs.length - 1] = paragraph
    }
    else {
      paragraph = { ...style, fragments: [] }
      paragraphs.push(paragraph)
    }
    return paragraph
  }

  function addFragment(content = '', style: StyleObject = {}): void {
    Array.from(content).forEach((c) => {
      if (isCRLF(c)) {
        const { fragments, ...pStyle } = lastParagraph() || addParagraph()
        if (!fragments.length) {
          fragments.push({
            ...style,
            content: NORMALIZED_CRLF,
          })
        }
        addParagraph(pStyle)
      }
      else {
        const paragraph = lastParagraph() || addParagraph()
        const fragment = paragraph.fragments[paragraph.fragments.length - 1]
        if (fragment) {
          const { content, ...fStyle } = fragment
          // TODO opz
          if (isEqualStyle(style, fStyle)) {
            fragment.content = `${content}${c}`
            return
          }
        }
        paragraph.fragments.push({
          ...style,
          content: c,
        })
      }
    })
  }

  const list: FlatTextContent[] = Array.isArray(value) ? value : [value]
  list.forEach((p) => {
    if (typeof p === 'string') {
      addParagraph()
      addFragment(p)
    }
    else if ('content' in p) {
      const { content, ...pStyle } = p
      addParagraph(normalizeStyle(pStyle))
      addFragment(content)
    }
    else if ('fragments' in p) {
      const { fragments, ...pStyle } = p
      addParagraph(normalizeStyle(pStyle))
      fragments.forEach((f) => {
        const { content, ...fStyle } = f
        addFragment(content, normalizeStyle(fStyle))
      })
    }
    else if (Array.isArray(p)) {
      addParagraph()
      p.forEach((f) => {
        if (typeof f === 'string') {
          addFragment(f)
        }
        else {
          const { content, ...fStyle } = f
          addFragment(content, normalizeStyle(fStyle))
        }
      })
    }
    else {
      console.warn('Failed to parse text content', p)
    }
  })

  const lastP = lastParagraph()
  if (lastP && !lastP.fragments.length) {
    lastP.fragments.push({
      content: NORMALIZED_CRLF,
    })
  }

  return paragraphs
}

export function normalizeText(value: Text): NormalizedText {
  if (typeof value === 'string') {
    return {
      content: normalizeTextContent(value),
    }
  }
  else if ('content' in value) {
    return {
      ...value,
      content: normalizeTextContent(value.content),
    }
  }
  else {
    return {
      content: normalizeTextContent(value),
    }
  }
}

export function textContentToString(value: TextContent): string {
  return normalizeTextContent(value)
    .map((p) => {
      const content = normalizeCRLF(
        p.fragments.flatMap(f => f.content).join(''),
      )
      if (isCRLF(content)) {
        return ''
      }
      return content
    })
    .join(NORMALIZED_CRLF)
}
