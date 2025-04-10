import type { MetaProperty } from './meta'

export interface Node<T = MetaProperty> {
  name?: string
  children?: Node[]
  meta?: T
}
