import type { Colord } from 'colord'
import type { None } from './types'
import { colord } from 'colord'

export interface RgbColor { r: number, g: number, b: number }
export interface HslColor { h: number, s: number, l: number }
export interface HsvColor { h: number, s: number, v: number }
export interface HwbColor { h: number, w: number, b: number }
export interface XyzColor { x: number, y: number, z: number }
export interface LabColor { l: number, a: number, b: number }
export interface LchColor { l: number, c: number, h: number }
export interface CmykColor { c: number, m: number, y: number, k: number }
type WithAlpha<O> = O & { a: number }
export type RgbaColor = WithAlpha<RgbColor>
export type HslaColor = WithAlpha<HslColor>
export type HsvaColor = WithAlpha<HsvColor>
export type HwbaColor = WithAlpha<HwbColor>
export type XyzaColor = WithAlpha<XyzColor>
export type LabaColor = LabColor & { alpha: number }
export type LchaColor = WithAlpha<LchColor>
export type CmykaColor = WithAlpha<CmykColor>
export type ObjectColor = RgbColor | RgbaColor | HslColor | HslaColor | HsvColor | HsvaColor | HwbColor | HwbaColor | XyzColor | XyzaColor | LabColor | LabaColor | LchColor | LchaColor | CmykColor | CmykaColor
export type Uint32Color = number
export type Color = None | Uint32Color | ObjectColor | string
export type RgbString = string
export type ColorDeclaration = RgbString

export function parseColor(color: Color): Colord {
  let input: ObjectColor | string
  if (typeof color === 'number') {
    input = {
      r: (color >> 24) & 0xFF,
      g: (color >> 16) & 0xFF,
      b: (color >> 8) & 0xFF,
      a: (color & 0xFF) / 255,
    }
  }
  else {
    input = color
  }

  return colord(input)
}

export function normalizeColor(color?: Color, orFail = false): ColorDeclaration | undefined {
  if (color === undefined || color === 'none') {
    return undefined
  }

  const parsed = parseColor(color)

  if (!parsed.isValid()) {
    if (typeof color === 'string') {
      // linear-gradient radial-gradient
      return color
    }

    const message = `Failed to normalizeColor ${color}`
    if (orFail) {
      throw new Error(message)
    }
    else {
      console.warn(message)
      return `rgba(0, 0, 0, 1)`
    }
  }

  const { r, g, b, a } = parsed.rgba

  return `rgba(${r}, ${g}, ${b}, ${a})`
}
