export type Overflow = 'hidden' | 'visible'
export type Visibility = 'hidden' | 'visible'

export interface IElementStyle {
  overflow: Overflow
  visibility: Visibility
  filter: string
  // position
  left: number
  top: number
  width: number
  height: number
  rotate: number
  opacity: number
  // margin
  marginLeft: number
  marginTop: number
  marginRight: number
  marginBottom: number
  // padding
  paddingLeft: number
  paddingTop: number
  paddingRight: number
  paddingBottom: number
  // transform
  scaleX: number
  scaleY: number
  skewX: number
  skewY: number
  translateX: number
  translateY: number
  transform: string
  transformOrigin: string
  // background
  backgroundImage: string
  backgroundColor: string
  // shadow
  shadowColor: string
  shadowOffsetX: number
  shadowOffsetY: number
  shadowBlur: number
  // border
  borderRadius: number
  borderColor: string
  borderWidth: number
}
