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

console.warn(normalizeText({
  content: [
    {
      content: 'FontWeight',
    },
    {
      content: 'FontWeight100',
      fontWeight: 100,
    },
    {
      content: 'FontWeight200',
      fontWeight: 200,
    },
    {
      content: 'FontWeight300',
      fontWeight: 300,
    },
    {
      content: 'FontWeight400',
      fontWeight: 400,
    },
    {
      content: 'FontWeight500',
      fontWeight: 500,
    },
    {
      content: 'FontWeight600',
      fontWeight: 600,
    },
    {
      content: 'FontWeight700',
      fontWeight: 700,
    },
    {
      content: 'FontWeightBold',
      fontWeight: 'bold',
    },
    {
      content: 'FontWeight800',
      fontWeight: 800,
    },
    {
      content: 'FontWeight900',
      fontWeight: 900,
    },
  ],
},
))

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
