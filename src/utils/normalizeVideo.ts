import type { IDOCNormalizedVideoProp, IDOCVideoProp } from '../interfaces'

export function normalizeVideo(video?: IDOCVideoProp): IDOCNormalizedVideoProp | undefined {
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
