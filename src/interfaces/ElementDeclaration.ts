import type { FillDeclaration } from './Fill'
import type { GeometryDeclaration } from './Geometry'
import type { IDOCElement } from './IDOCElement'
import type { ImageDeclaration } from './Image'
import type { StrokeDeclaration } from './Stroke'
import type { TextDeclaration } from './Text'
import type { VideoDeclaration } from './Video'

export interface ElementDeclaration extends IDOCElement {
  image?: ImageDeclaration
  video?: VideoDeclaration
  text?: TextDeclaration
  geometry?: GeometryDeclaration
  fill?: FillDeclaration
  stroke?: StrokeDeclaration
  children?: ElementDeclaration[]
}
