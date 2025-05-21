import type { ColorDeclaration } from './color'
import type {
  LinearGradientNode,
  RadialGradientNode,
  RepeatingLinearGradientNode,
  RepeatingRadialGradientNode,
} from './gradient-parser'
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

function parseLinearGradientNode(node: LinearGradientNode | RepeatingLinearGradientNode): LinearGradient {
  let angle = 0
  switch (node.orientation?.type) {
    case 'angular':
      angle = Number(node.orientation.value)
      break
    case 'directional':
      // TODO
      break
  }

  const stops = node.colorStops.map((stop) => {
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

function parseRadialGradientNode(ast: RadialGradientNode | RepeatingRadialGradientNode): any {
  ast.orientation?.map((item) => {
    switch (item?.type) {
      case 'shape':
      case 'default-radial':
      case 'extent-keyword':
      default:
        return null
    }
  })

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

  return { stops }
}

export function normalizeGradient(cssText: string): (LinearGradient | undefined)[] {
  return parseGradient(cssText).map((node) => {
    switch (node?.type) {
      case 'linear-gradient':
        return parseLinearGradientNode(node)
      case 'repeating-linear-gradient':
        return parseLinearGradientNode(node)
      case 'radial-gradient':
        return parseRadialGradientNode(node)
      case 'repeating-radial-gradient':
        return parseRadialGradientNode(node)
      default:
        return undefined
    }
  })
}
