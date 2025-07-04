import type { WithNone } from '../types'
import type { LineEndSize, LineEndType } from './lineEnd'

export interface TailEnd {
  type: LineEndType
  width?: WithNone<LineEndSize>
  height?: WithNone<LineEndSize>
}
