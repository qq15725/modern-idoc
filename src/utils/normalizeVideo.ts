import type { VideoDeclaration, VideoProp } from '../interfaces'

export function normalizeVideo(video?: VideoProp): VideoDeclaration | undefined {
  if (!video || video === 'none') {
    return undefined
  }
  else if (typeof video === 'string') {
    return {
      src: video,
    }
  }
  else {
    return {
      ...video,
    }
  }
}
