import type { MetaProp } from './meta'

export interface IDOCNode {
  name?: string
  children?: IDOCNode[]
  meta?: MetaProp
}
