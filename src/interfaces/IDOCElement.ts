import type { FillDeclaration, FillProp } from './Fill'
import type { GeometryDeclaration, GeometryProp } from './Geometry'
import type { IDOCNode } from './IDOCNode'
import type { ImageDeclaration, ImageProp } from './Image'
import type { StrokeDeclaration, StrokeProp } from './Stroke'
import type { StyleProp } from './style'
import type { TextDeclaration, TextProp } from './Text'
import type { VideoDeclaration, VideoProp } from './Video'

export interface IDOCElement extends IDOCNode {
  style?: StyleProp
  image?: ImageProp
  video?: VideoProp
  text?: TextProp
  geometry?: GeometryProp
  fill?: FillProp
  stroke?: StrokeProp
  children?: IDOCElement[]
}

export interface IDOCElementDeclaration extends IDOCElement {
  image?: ImageDeclaration
  video?: VideoDeclaration
  text?: TextDeclaration
  geometry?: GeometryDeclaration
  fill?: FillDeclaration
  stroke?: StrokeDeclaration
  children?: IDOCElementDeclaration[]
}
