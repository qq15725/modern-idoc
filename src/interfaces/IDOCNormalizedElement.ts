import type { IDOCElement } from './IDOCElement'
import type { IDOCNormalizedFillProp } from './IDOCNormalizedFillProp'
import type { IDOCNormalizedGeometryProp } from './IDOCNormalizedGeometryProp'
import type { IDOCNormalizedImageProp } from './IDOCNormalizedImageProp'
import type { IDOCNormalizedStrokeProp } from './IDOCNormalizedStrokeProp'
import type { IDOCNormalizedTextProp } from './IDOCNormalizedTextProp'
import type { IDOCNormalizedVideoProp } from './IDOCNormalizedVideoProp'

export interface IDOCNormalizedElement extends IDOCElement {
  image?: IDOCNormalizedImageProp
  video?: IDOCNormalizedVideoProp
  text?: IDOCNormalizedTextProp
  geometry?: IDOCNormalizedGeometryProp
  fill?: IDOCNormalizedFillProp
  stroke?: IDOCNormalizedStrokeProp
  children?: IDOCNormalizedElement[]
}
