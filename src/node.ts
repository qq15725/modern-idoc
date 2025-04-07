import type { MetaProperty } from './meta'

export interface IDOCNode<T = MetaProperty> {
  name?: string
  children?: IDOCNode[]
  meta?: T
}
