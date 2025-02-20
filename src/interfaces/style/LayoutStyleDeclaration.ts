import type { Align, BoxSizing, FlexDirection, FlexWrap, Justify, Overflow, Position } from './types'

export interface LayoutStyleDeclaration {
  overflow: Overflow
  alignContent: Align
  alignItems: Align
  alignSelf: Align
  borderTop: string
  borderLeft: string
  borderRight: string
  borderBottom: string
  borderWidth: number
  border: string
  direction: 'inherit' | 'ltr' | 'rtl'
  display: 'none' | 'flex' | 'contents'
  flex: number
  flexBasis: number | 'auto' | `${number}%`
  flexDirection: FlexDirection
  flexGrow: number
  flexShrink: number
  flexWrap: FlexWrap
  height: number | 'auto' | `${number}%`
  justifyContent: Justify
  gap: number | `${number}%`
  marginTop: number | 'auto' | `${number}%`
  marginLeft: number | 'auto' | `${number}%`
  marginRight: number | 'auto' | `${number}%`
  marginBottom: number | 'auto' | `${number}%`
  margin: number | 'auto' | `${number}%`
  maxHeight: number | `${number}%`
  maxWidth: number | `${number}%`
  minHeight: number | `${number}%`
  minWidth: number | `${number}%`
  paddingTop: number | `${number}%`
  paddingLeft: number | `${number}%`
  paddingRight: number | `${number}%`
  paddingBottom: number | `${number}%`
  padding: number | `${number}%`
  top: number | `${number}%`
  bottom: number | `${number}%`
  left: number | `${number}%`
  right: number | `${number}%`
  position: Position
  boxSizing: BoxSizing
  width: number | 'auto' | `${number}%`
}
