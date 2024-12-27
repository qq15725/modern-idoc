import type { IDOCVideoDeclaration, IDOCVideoProp } from '../interfaces'

export function normalizeVideo(video?: IDOCVideoProp): IDOCVideoDeclaration | undefined {
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
