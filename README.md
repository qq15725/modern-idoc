<h1 align="center">modern-idoc</h1>

<p align="center">
  <a href="https://unpkg.com/modern-idoc">
    <img src="https://img.shields.io/bundlephobia/minzip/modern-idoc" alt="Minzip">
  </a>
  <a href="https://www.npmjs.com/package/modern-idoc">
    <img src="https://img.shields.io/npm/v/modern-idoc.svg" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/modern-idoc">
    <img src="https://img.shields.io/npm/dm/modern-idoc" alt="Downloads">
  </a>
  <a href="https://github.com/qq15725/modern-idoc/issues">
    <img src="https://img.shields.io/github/issues/qq15725/modern-idoc" alt="Issues">
  </a>
  <a href="https://github.com/qq15725/modern-idoc/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/modern-idoc.svg" alt="License">
  </a>
</p>

## Usage

```ts
import type { IDoc } from 'modern-idoc'

const doc: IDoc = {
  name: 'example.pptx',
  children: [
    {
      name: 'ppt/slides/slide1.xml',
      type: 'group',
      style: {
        width: 960,
        height: 540,
      },
      meta: {
        layout: 'ppt/slideLayous/slideLayout1.xml',
      },
      children: [
        {
          type: 'image',
          style: {
            left: 100,
            top: 100,
            width: 300,
            height: 400,
          },
          src: '/example.png',
        },
        {
          type: 'text',
          style: {
            left: 100,
            top: 100,
          },
          content: 'TEXT',
        },
        {
          type: 'shape',
          paths: [
            { fill: '#000', data: 'M 0 0 L 100 100' },
          ],
        },
      ]
    },
  ],
}
```
