import type {
  TextContent,
  TextContentDeclaration,
  TextContentFlat,
} from '../interfaces'

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
