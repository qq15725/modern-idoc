import { normalizeText, normalizeTextContent } from '../../src'

console.warn(normalizeText({
  style: {
    fontSize: 40,
    padding: 20,
    backgroundColor: 'red',
  },
  content: [
    {
      fragments: [
        { backgroundColor: 'blue', content: 'Back' },
        { content: 'ground1' },
      ],
    },
  ],
}))

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
