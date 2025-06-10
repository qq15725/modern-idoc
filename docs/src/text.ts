import { normalizeTextContent } from '../../src'

console.warn(normalizeTextContent('textContent'))

console.warn(normalizeTextContent('text\nContent'))

console.warn(
  normalizeTextContent({
    fontSize: 12,
    content: 'text\nContent',
  }),
)

console.warn(
  normalizeTextContent([
    {
      fontSize: 12,
      content: 'text\nContent',
    },
  ]),
)

console.warn(
  normalizeTextContent([
    {
      fontSize: 12,
      fragments: [
        {
          content: 'text\nContent',
        },
      ],
    },
    {
      fontSize: 14,
      fragments: [
        {
          content: 'text\nContent',
        },
      ],
    },
  ]),
)
