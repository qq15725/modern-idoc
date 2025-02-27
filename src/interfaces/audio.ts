import type { Noneable } from './shared'

export interface AudioDeclaration {
  src: string
}

export type AudioProp =
  | Noneable
  | string
  | AudioDeclaration
