import type { None } from './shared'

export interface OutlineDeclaration {
  width?: number
  style?: 'dashed' | 'solid' | string
  image?: string
  color?: string
  opacity?: number
}

export type OutlineProp =
  | None
  | string
  | Partial<OutlineDeclaration>
