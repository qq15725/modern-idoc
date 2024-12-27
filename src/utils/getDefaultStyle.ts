import type { IDOCStyleProp } from '../interfaces'
import { getDefaultElementStyle } from './getDefaultElementStyle'
import { getDefaultTextStyle } from './getDefaultTextStyle'

export function getDefaultStyle(): IDOCStyleProp {
  return {
    ...getDefaultElementStyle(),
    ...getDefaultTextStyle(),
  }
}
