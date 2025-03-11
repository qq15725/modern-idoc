import type { None } from '../shared'
import type {
  Align,
  BoxSizing,
  Direction,
  Display,
  FlexDirection,
  FlexWrap,
  Justify,
  Overflow,
  Position,
  StyleUnit,
} from './types'

export interface LayoutStyleDeclaration {
  // box
  overflow: Overflow
  direction?: Direction
  display?: Display
  boxSizing?: BoxSizing
  width?: StyleUnit | 'auto'
  height?: StyleUnit | 'auto'
  maxHeight?: StyleUnit
  maxWidth?: StyleUnit
  minHeight?: StyleUnit
  minWidth?: StyleUnit
  // position
  position?: Position
  left: StyleUnit
  top: StyleUnit
  right?: StyleUnit
  bottom?: StyleUnit
  // border
  borderTop?: string
  borderLeft?: string
  borderRight?: string
  borderBottom?: string
  borderWidth?: number
  border?: string
  // flex
  flex?: number
  flexBasis?: StyleUnit | 'auto'
  flexDirection?: FlexDirection
  flexGrow?: number
  flexShrink?: number
  flexWrap?: FlexWrap
  alignContent?: Align
  alignItems?: Align
  alignSelf?: Align
  justifyContent?: Justify
  gap?: StyleUnit
  // margin
  marginTop?: None | StyleUnit | 'auto'
  marginLeft?: None | StyleUnit | 'auto'
  marginRight?: None | StyleUnit | 'auto'
  marginBottom?: None | StyleUnit | 'auto'
  margin?: None | StyleUnit | 'auto'
  // padding
  paddingTop?: StyleUnit
  paddingLeft?: StyleUnit
  paddingRight?: StyleUnit
  paddingBottom?: StyleUnit
  padding?: StyleUnit
}
