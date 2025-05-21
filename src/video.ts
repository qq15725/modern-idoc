export interface VideoDeclaration {
  src: string
}

export type VideoProperty =
  | string
  | VideoDeclaration

export function normalizeVideo(video: VideoProperty): VideoDeclaration | undefined {
  if (typeof video === 'string') {
    return { src: video }
  }
  else {
    return video
  }
}
