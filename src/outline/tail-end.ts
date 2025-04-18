import type { None } from '../types'
import type { LineEndSize, LineEndType } from './line-end'

export interface TailEnd {
  type: LineEndType
  width?: None | LineEndSize
  height?: None | LineEndSize
}
