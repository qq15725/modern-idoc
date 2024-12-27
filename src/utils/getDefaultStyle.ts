import type { IDOCStyleDeclaration } from '../interfaces'
import { getDefaultElementStyle } from './getDefaultElementStyle'
import { getDefaultTextStyle } from './getDefaultTextStyle'

export function getDefaultStyle(): IDOCStyleDeclaration {
  return {
    ...getDefaultElementStyle(),
    ...getDefaultTextStyle(),
  }
}
