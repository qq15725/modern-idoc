import type { FillDeclaration, FillProp } from './fill'
import type { GeometryDeclaration, GeometryProp } from './geometry'
import type { IDOCNode } from './IDOCNode'
import type { ImageDeclaration, ImageProp } from './image'
import type { OutlineDeclaration, OutlineProp } from './outline'
import type { StyleProp } from './style'
import type { TextDeclaration, TextProp } from './text'
import type { VideoDeclaration, VideoProp } from './video'

export interface IDOCElement extends IDOCNode {
  style?: StyleProp
  image?: ImageProp
  video?: VideoProp
  text?: TextProp
  geometry?: GeometryProp
  fill?: FillProp
  outline?: OutlineProp
  children?: IDOCElement[]
}

export interface IDOCElementDeclaration extends IDOCElement {
  image?: ImageDeclaration
  video?: VideoDeclaration
  text?: TextDeclaration
  geometry?: GeometryDeclaration
  fill?: FillDeclaration
  outline?: OutlineDeclaration
  children?: IDOCElementDeclaration[]
}
