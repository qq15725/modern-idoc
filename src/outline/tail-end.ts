import type { WithNone } from '../types'
import type { LineEndSize, LineEndType } from './line-end'

export interface TailEnd {
  type: LineEndType
  width?: WithNone<LineEndSize>
  height?: WithNone<LineEndSize>
}
