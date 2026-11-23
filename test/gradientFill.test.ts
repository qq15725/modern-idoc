import { describe, expect, it } from 'vitest'
import { normalizeGradientFill } from '../src'

describe('cSS and document gradient directions', () => {
  it.each([
    ['', 90], ['180deg, ', 90], ['90deg, ', 0], ['-90deg, ', 180],
    ['to top, ', 270], ['to bottom right, ', 45], [`${Math.PI}rad, `, 90],
  ] as const)('imports %s once and preserves structured fills', (direction, expected) => {
    const css = `linear-gradient(${direction}red, transparent)`
    const fill = normalizeGradientFill(css)
    expect(fill.linearGradient?.angle).toBeCloseTo(expected)
    expect(normalizeGradientFill({ image: css })).toEqual(fill)
    expect(normalizeGradientFill(fill)).toEqual(fill)
  })
})
