import type { Noneable } from './shared'

export interface AudioDeclaration {
  url: string
}

export type AudioProp =
  | Noneable
  | string
  | AudioDeclaration
