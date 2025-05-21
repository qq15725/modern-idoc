import type { Document } from '../../src'

export const pptx: Document = {
  children: [
    {
      name: 'ppt/slides/slide1.xml',
      style: { width: 960, height: 540 },
      children: [
        {
          style: {
            rotate: 60,
            width: 50,
            height: 50,
          },
          background: '/static/example.png',
        },
        {
          style: {
            rotate: 40,
            left: 100,
            top: 100,
            fontSize: 20,
            color: '#FF00FF',
          },
          text: 'test',
        },
        {
          style: {
            left: 200,
            top: 100,
            width: 100,
            height: 200,
            fontSize: 22,
          },
          text: [
            {
              letterSpacing: 3,
              fragments: [
                { content: 'He', color: '#00FF00', fontSize: 12 },
                { content: 'llo', color: '#000000' },
              ],
            },
            { content: ', ', color: '#FF0000' },
            { content: 'World!', color: '#0000FF' },
          ],
        },
      ],
    },
  ],
}
