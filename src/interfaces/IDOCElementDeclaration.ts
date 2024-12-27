import type { IDOCElement } from './IDOCElement'
import type { IDOCFillDeclaration } from './IDOCFillDeclaration'
import type { IDOCGeometryDeclaration } from './IDOCGeometryDeclaration'
import type { IDOCImageDeclaration } from './IDOCImageDeclaration'
import type { IDOCStrokeDeclaration } from './IDOCStrokeDeclaration'
import type { IDOCTextDeclaration } from './IDOCTextDeclaration'
import type { IDOCVideoDeclaration } from './IDOCVideoDeclaration'

export interface IDOCElementDeclaration extends IDOCElement {
  image?: IDOCImageDeclaration
  video?: IDOCVideoDeclaration
  text?: IDOCTextDeclaration
  geometry?: IDOCGeometryDeclaration
  fill?: IDOCFillDeclaration
  stroke?: IDOCStrokeDeclaration
  children?: IDOCElementDeclaration[]
}
