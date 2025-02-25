import type { LayoutStyleDeclaration } from '../interfaces'

export function getDefaultLayoutStyle(): LayoutStyleDeclaration {
  return {
    overflow: 'visible',
    alignContent: 'stretch',
    alignItems: 'stretch',
    alignSelf: 'auto',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: 'none',
    borderWidth: 0,
    border: 'none',
    direction: 'inherit',
    display: 'flex',
    flex: 0,
    flexBasis: 'auto',
    flexDirection: 'row',
    flexGrow: 0,
    flexShrink: 1,
    flexWrap: 'nowrap',
    height: 'auto',
    justifyContent: 'flex-start',
    gap: 0,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    margin: 0,
    maxHeight: 0,
    maxWidth: 0,
    minHeight: 0,
    minWidth: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    padding: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'static',
    boxSizing: 'content-box',
    width: 'auto',
  }
}
