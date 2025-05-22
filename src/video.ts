export interface NormalizedVideo {
  src: string
}

export type VideoProperty =
  | string
  | NormalizedVideo

export function normalizeVideo(video: VideoProperty): NormalizedVideo | undefined {
  if (typeof video === 'string') {
    return { src: video }
  }
  else {
    return video
  }
}
