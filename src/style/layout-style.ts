import type { None } from '../types'
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

export function getDefaultLayoutStyle(): LayoutStyleDeclaration {
  return {
    // box
    overflow: 'visible',
    direction: undefined,
    display: undefined,
    boxSizing: undefined,
    width: undefined,
    height: undefined,
    maxHeight: undefined,
    maxWidth: undefined,
    minHeight: undefined,
    minWidth: undefined,
    // position
    position: undefined,
    left: 0,
    top: 0,
    right: undefined,
    bottom: undefined,
    // border
    borderTop: undefined,
    borderLeft: undefined,
    borderRight: undefined,
    borderBottom: undefined,
    borderWidth: 0,
    border: undefined,
    // flex
    flex: undefined,
    flexBasis: undefined,
    flexDirection: undefined,
    flexGrow: undefined,
    flexShrink: undefined,
    flexWrap: undefined,
    justifyContent: undefined,
    gap: undefined,
    alignContent: undefined,
    alignItems: undefined,
    alignSelf: undefined,
    // margin
    marginTop: undefined,
    marginLeft: undefined,
    marginRight: undefined,
    marginBottom: undefined,
    margin: undefined,
    // padding
    paddingTop: undefined,
    paddingLeft: undefined,
    paddingRight: undefined,
    paddingBottom: undefined,
    padding: undefined,
  }
}
