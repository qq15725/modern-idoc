import type { FillProp } from './Fill'
import type { GeometryProp } from './Geometry'
import type { IDOCNode } from './IDOCNode'
import type { ImageProp } from './Image'
import type { StrokeProp } from './Stroke'
import type { StyleProp } from './StyleProp'
import type { TextProp } from './Text'
import type { VideoProp } from './Video'

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
