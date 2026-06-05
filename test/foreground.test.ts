import { describe, expect, it } from 'vitest'
import { normalizeForeground } from '../src'

describe('normalizeForeground', () => {
  it('normalizes a plain url string', () => {
    expect(normalizeForeground('a.png')).toEqual({ enabled: true, image: 'a.png' })
  })

  it('keeps fillWithShape', () => {
    expect(normalizeForeground({ image: 'a.png', fillWithShape: true })).toEqual({
      enabled: true,
      image: 'a.png',
      fillWithShape: true,
    })
  })

  it('normalizes image effects as generic Effect[] (bige 图片样式)', () => {
    const fg = normalizeForeground({
      image: 'a.png',
      fillWithShape: true,
      // bige: filling 重上色 + 双层描边(拆成两层) + 位移重影
      effects: [
        { outline: { color: '#000', width: 12 } },
        { outline: { color: '#fff', width: 6 } },
        { fill: { color: '#f00' }, transform: 'translate(4, 6)' },
      ],
    })
    expect(fg?.effects).toEqual([
      { outline: { enabled: true, color: '#000000ff', width: 12 } },
      { outline: { enabled: true, color: '#ffffffff', width: 6 } },
      { fill: { enabled: true, color: '#ff0000ff' }, transform: 'translate(4, 6)' },
    ])
  })

  it('omits effects when not provided', () => {
    expect(normalizeForeground({ image: 'a.png' })?.effects).toBeUndefined()
  })
})
