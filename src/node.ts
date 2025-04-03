import type { MetaProperty } from './meta'

export interface IDOCNode {
  name?: string
  children?: IDOCNode[]
  meta?: MetaProperty
}
