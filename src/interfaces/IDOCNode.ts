import type { IDOCMetaProp } from './IDOCMetaProp'

export interface IDOCNode {
  name?: string
  children?: IDOCNode[]
  meta?: IDOCMetaProp
}
