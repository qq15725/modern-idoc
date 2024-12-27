import type { IDOCTextContent, IDOCTextDeclaration } from './IDOCTextDeclaration'

export type IDOCTextProp =
  | string
  | IDOCTextContent
  | (IDOCTextDeclaration & { content: IDOCTextContent })
  | IDOCTextDeclaration
