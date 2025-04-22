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

export type HighlightStyleDeclaration = Partial<{
  highlight: Partial<HighlightDeclaration>
  highlightImage: HighlightImage
  highlightReferImage: HighlightReferImage
  highlightColormap: HighlightColormap
  highlightLine: HighlightLine
  highlightSize: HighlightSize
  highlightThickness: HighlightThickness
}>

export function getDefaultHighlightStyle(): Required<HighlightStyleDeclaration> {
  return {
    highlight: {},
    highlightImage: 'none',
    highlightReferImage: 'none',
    highlightColormap: 'none',
    highlightLine: 'none',
    highlightSize: 'cover',
    highlightThickness: '100%',
  }
}
