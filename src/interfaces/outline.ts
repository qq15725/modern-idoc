import type { Noneable } from './shared'

export interface OutlineDeclaration {
  width: number
  style: 'dashed' | 'solid' | string
  image: string
  color: string
  opacity: number
}

export type OutlineProp =
  | Noneable
  | string
  | Partial<OutlineDeclaration>
