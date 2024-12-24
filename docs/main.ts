import type { IDoc } from '../src'

const doc: IDoc = {
  children: [
    {
      type: 'image',
      src: '/example.png',
    },
    {
      type: 'text',
      content: 'TEXT',
    },
    {
      type: 'shape',
      paths: [
        { fill: '#000', data: 'M 0 0 L 100 100' },
      ],
    },
  ],
}

console.warn(doc)
