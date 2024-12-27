import type { IDOCGeometryPropObject, IDOCPath2D } from './IDOCGeometryProp'

export interface IDOCNormalizedGeometryProp extends IDOCGeometryPropObject {
  data: IDOCPath2D[]
}
