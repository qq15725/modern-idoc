import type { MetaProp } from './Meta'

export interface IDOCNode {
  name?: string
  children?: IDOCNode[]
  meta?: MetaProp
}
