import type {
  HighlightColormap,
  HighlightImage,
  HighlightLine,
  HighlightReferImage,
  HighlightSize,
  HighlightThickness,
} from './types'

export interface HighlightDeclaration {
  image: HighlightImage
  referImage: HighlightReferImage
  colormap: HighlightColormap
  line: HighlightLine
  size: HighlightSize
  thickness: HighlightThickness
}

export interface HighlightStyleDeclaration {
  highlight?: Partial<HighlightDeclaration>
  highlightImage: HighlightImage
  highlightReferImage: HighlightReferImage
  highlightColormap: HighlightColormap
  highlightLine: HighlightLine
  highlightSize: HighlightSize
  highlightThickness: HighlightThickness
}
