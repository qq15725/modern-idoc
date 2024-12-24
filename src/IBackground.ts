export interface IBackgroundStyle {
  opacity: number
}

export interface IBackground extends Partial<IBackgroundStyle> {
  src: string
}
