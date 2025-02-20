import type { FillProp } from './FillProp'
import type { GeometryProp } from './GeometryProp'
import type { IDOCNode } from './IDOCNode'
import type { ImageProp } from './ImageProp'
import type { StrokeProp } from './StrokeProp'
import type { StyleProp } from './StyleProp'
import type { TextProp } from './TextProp'
import type { VideoProp } from './VideoProp'

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
