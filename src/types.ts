export type None = 'none'

export declare interface RgbColor {
  r: number
  g: number
  b: number
}
export declare interface HslColor {
  h: number
  s: number
  l: number
}
export declare interface HsvColor {
  h: number
  s: number
  v: number
}
export declare interface HwbColor {
  h: number
  w: number
  b: number
}
export interface XyzColor {
  x: number
  y: number
  z: number
}
export interface LabColor {
  l: number
  a: number
  b: number
}
export interface LchColor {
  l: number
  c: number
  h: number
}
export interface CmykColor {
  c: number
  m: number
  y: number
  k: number
}
declare type WithAlpha<O> = O & {
  a: number
}
export declare type RgbaColor = WithAlpha<RgbColor>
export declare type HslaColor = WithAlpha<HslColor>
export declare type HsvaColor = WithAlpha<HsvColor>
export declare type HwbaColor = WithAlpha<HwbColor>
export declare type XyzaColor = WithAlpha<XyzColor>
export declare type LabaColor = LabColor & {
  alpha: number
}
export declare type LchaColor = WithAlpha<LchColor>
export declare type CmykaColor = WithAlpha<CmykColor>
export declare type ObjectColor = RgbColor | RgbaColor | HslColor | HslaColor | HsvColor | HsvaColor | HwbColor | HwbaColor | XyzColor | XyzaColor | LabColor | LabaColor | LchColor | LchaColor | CmykColor | CmykaColor
export declare type AnyColor = string | ObjectColor
export type ColorValue = number | AnyColor
