import type { TextContent, TextDeclaration } from './TextDeclaration'

export type TextProp =
  | string
  | TextContent
  | (TextDeclaration & { content: TextContent })
  | TextDeclaration
