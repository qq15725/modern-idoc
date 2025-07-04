import type { WithNone } from '../types'
import type { LineEndSize, LineEndType } from './lineEnd'

export interface HeadEnd {
  type: LineEndType
  width?: WithNone<LineEndSize>
  height?: WithNone<LineEndSize>
}
