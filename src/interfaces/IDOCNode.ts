import type { MetaProp } from './MetaProp'

export interface IDOCNode {
  name?: string
  children?: IDOCNode[]
  meta?: MetaProp
}
