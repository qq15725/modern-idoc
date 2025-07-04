export interface LinearGradientNode {
  type: 'linear-gradient'
  orientation?: DirectionalNode | AngularNode | undefined
  colorStops: ColorStopNode[]
}

export interface RepeatingLinearGradientNode {
  type: 'repeating-linear-gradient'
  orientation?: DirectionalNode | AngularNode | undefined
  colorStops: ColorStopNode[]
}

export interface RadialGradientNode {
  type: 'radial-gradient'
  orientation?: (ShapeNode | DefaultRadialNode | ExtentKeywordNode)[] | undefined
  colorStops: ColorStopNode[]
}

export interface RepeatingRadialGradientNode {
  type: 'repeating-radial-gradient'
  orientation?: (ShapeNode | DefaultRadialNode | ExtentKeywordNode)[] | undefined
  colorStops: ColorStopNode[]
}

export interface DirectionalNode {
  type: 'directional'
  value:
    | 'left'
    | 'top'
    | 'bottom'
    | 'right'
    | 'left top'
    | 'top left'
    | 'left bottom'
    | 'bottom left'
    | 'right top'
    | 'top right'
    | 'right bottom'
    | 'bottom right'
}

export interface AngularNode {
  type: 'angular'
  value: string
}

export interface LiteralNode {
  type: 'literal'
  value: string
  length?: PxNode | EmNode | PercentNode | undefined
}

export interface HexNode {
  type: 'hex'
  value: string
  length?: PxNode | EmNode | PercentNode | undefined
}

export interface RgbNode {
  type: 'rgb'
  value: [string, string, string]
  length?: PxNode | EmNode | PercentNode | undefined
}

export interface RgbaNode {
  type: 'rgba'
  value: [string, string, string, string?]
  length?: PxNode | EmNode | PercentNode | undefined
}

export interface ShapeNode {
  type: 'shape'
  style?: ExtentKeywordNode | PxNode | EmNode | PercentNode | PositionKeywordNode | undefined
  value: 'ellipse' | 'circle'
  at?: PositionNode | undefined
}

export interface DefaultRadialNode {
  type: 'default-radial'
  at: PositionNode
}

export interface PositionKeywordNode {
  type: 'position-keyword'
  value: 'center' | 'left' | 'top' | 'bottom' | 'right'
}

export interface PositionNode {
  type: 'position'
  value: {
    x: ExtentKeywordNode | PxNode | EmNode | PercentNode | PositionKeywordNode
    y: ExtentKeywordNode | PxNode | EmNode | PercentNode | PositionKeywordNode
  }
}

export interface ExtentKeywordNode {
  type: 'extent-keyword'
  value: 'closest-side' | 'closest-corner' | 'farthest-side' | 'farthest-corner' | 'contain' | 'cover'
  at?: PositionNode | undefined
}

export interface PxNode {
  type: 'px'
  value: string
}

export interface EmNode {
  type: 'em'
  value: string
}

export interface PercentNode {
  type: '%'
  value: string
}

export type ColorStopNode = LiteralNode | HexNode | RgbNode | RgbaNode
export type GradientNode = LinearGradientNode | RepeatingLinearGradientNode | RadialGradientNode | RepeatingRadialGradientNode

export declare function parseGradient(cssText: string): GradientNode[]
export declare function stringifyGradient(ast: GradientNode[]): string
