import type { ColorDeclaration } from './color'
import type { LinearGradientNode, RepeatingLinearGradientNode } from './gradient-parser'
import { normalizeColor } from './color'
import { parseGradient } from './gradient-parser'

export interface ColorStop {
  offset: number
  color: ColorDeclaration
}

export interface LinearGradient {
  angle: number
  stops: ColorStop[]
}

function normalizeLinearGradient(ast: LinearGradientNode | RepeatingLinearGradientNode): LinearGradient {
  let angle = 0
  switch (ast.orientation?.type) {
    case 'angular':
      angle = Number(ast.orientation.value)
      break
    case 'directional':
      // TODO
      break
  }
  const stops = ast.colorStops.map((stop) => {
    const value = stop.value
    let offset = 0
    let color = '#00000000'
    switch (stop.type) {
      case 'rgb':
        color = normalizeColor({
          r: Number(value[0] ?? 0),
          g: Number(value[1] ?? 0),
          b: Number(value[2] ?? 0),
        })
        break
      case 'rgba':
        color = normalizeColor({
          r: Number(value[0] ?? 0),
          g: Number(value[1] ?? 0),
          b: Number(value[2] ?? 0),
          a: Number(value[3] ?? 0),
        })
        break
      case 'literal':
        color = normalizeColor(stop.value)
        break
      case 'hex':
        color = normalizeColor(stop.value)
        break
    }
    switch (stop.length?.type) {
      case '%':
        offset = Number(stop.length.value) / 100
        break
      case 'px':
        // TODO
        break
      case 'em':
        // TODO
        break
    }
    return { offset, color }
  })
  return { angle, stops }
}

export function normalizeGradient(cssText: string): any {
  return parseGradient(cssText).map((ast) => {
    switch (ast.type) {
      case 'linear-gradient':
        return normalizeLinearGradient(ast)
      case 'repeating-linear-gradient':
        return normalizeLinearGradient(ast)
      case 'radial-gradient':
      case 'repeating-radial-gradient':
      default:
        return null
    }
  })
}
