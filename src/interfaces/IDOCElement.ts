import type { IDOCFillProp } from './IDOCFillProp'
import type { IDOCGeometryProp } from './IDOCGeometryProp'
import type { IDOCImageProp } from './IDOCImageProp'
import type { IDOCNode } from './IDOCNode'
import type { IDOCStrokeProp } from './IDOCStrokeProp'
import type { IDOCStyleProp } from './IDOCStyleProp'
import type { IDOCTextProp } from './IDOCTextProp'
import type { IDOCVideoProp } from './IDOCVideoProp'

export interface IDOCElement extends IDOCNode {
  style?: Partial<IDOCStyleProp>
  image?: IDOCImageProp
  video?: IDOCVideoProp
  text?: IDOCTextProp
  geometry?: IDOCGeometryProp
  fill?: IDOCFillProp
  stroke?: IDOCStrokeProp
  children?: IDOCElement[]
}
