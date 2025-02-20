import type { HighlightDeclaration } from './HighlightDeclaration'
import type {
  HighlightColormap,
  HighlightImage,
  HighlightLine,
  HighlightReferImage,
  HighlightSize,
  HighlightThickness,
} from './types'

export interface HighlightStyleDeclaration {
  highlight?: Partial<HighlightDeclaration>
  highlightImage: HighlightImage
  highlightReferImage: HighlightReferImage
  highlightColormap: HighlightColormap
  highlightLine: HighlightLine
  highlightSize: HighlightSize
  highlightThickness: HighlightThickness
}
