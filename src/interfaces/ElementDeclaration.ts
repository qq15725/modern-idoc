import type { FillDeclaration } from './FillDeclaration'
import type { GeometryDeclaration } from './GeometryDeclaration'
import type { IDOCElement } from './IDOCElement'
import type { ImageDeclaration } from './ImageDeclaration'
import type { StrokeDeclaration } from './StrokeDeclaration'
import type { TextDeclaration } from './TextDeclaration'
import type { VideoDeclaration } from './VideoDeclaration'

export interface ElementDeclaration extends IDOCElement {
  image?: ImageDeclaration
  video?: VideoDeclaration
  text?: TextDeclaration
  geometry?: GeometryDeclaration
  fill?: FillDeclaration
  stroke?: StrokeDeclaration
  children?: ElementDeclaration[]
}
