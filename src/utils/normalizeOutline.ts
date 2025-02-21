import type { OutlineDeclaration, OutlineProp } from '../interfaces'

export function normalizeOutline(outline?: OutlineProp): OutlineDeclaration | undefined {
  if (!outline || outline === 'none') {
    return undefined
  }
  else if (typeof outline === 'string') {
    return {
      color: outline,
    }
  }
  else {
    return outline
  }
}
