import type { LayoutStyleDeclaration } from '../interfaces'

export function getDefaultLayoutStyle(): LayoutStyleDeclaration {
  return {
    // box
    overflow: undefined,
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
