import type { StyleDeclaration } from '../interfaces'
import { getDefaultElementStyle } from './getDefaultElementStyle'
import { getDefaultTextStyle } from './getDefaultTextStyle'

export function getDefaultStyle(): StyleDeclaration {
  return {
    ...getDefaultElementStyle(),
    ...getDefaultTextStyle(),
  }
}
