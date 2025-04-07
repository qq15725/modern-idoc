import type { None } from './types'

export interface VideoDeclaration {
  src: string
}

export type VideoProperty =
  | None
  | string
  | VideoDeclaration

export function normalizeVideo(video?: VideoProperty): VideoDeclaration | undefined {
  if (!video || video === 'none') {
    return undefined
  }
  else if (typeof video === 'string') {
    return { src: video }
  }
  else {
    return video
  }
}
