import type { ShadowDeclaration } from './ShadowDeclaration'

export interface ShadowStyleDeclaration {
  shadow?: Partial<ShadowDeclaration>
  shadowColor: string
  shadowOffsetX: number
  shadowOffsetY: number
  shadowBlur: number
  boxShadow: 'none' | string
}
