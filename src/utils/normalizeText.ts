import type { IDOCNormalizedTextProp, IDOCTextProp } from '../interfaces'
import { normalizeTextContent } from './normalizeTextContent'

export function normalizeText(text?: IDOCTextProp): IDOCNormalizedTextProp | undefined {
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