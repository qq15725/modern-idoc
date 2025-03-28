import type { AudioDeclaration, AudioProp } from '../interfaces'

export function normalizeAudio(audio?: AudioProp): AudioDeclaration | undefined {
  if (!audio || audio === 'none') {
    return undefined
  }
  else if (typeof audio === 'string') {
    return {
      src: audio,
    }
  }
  else {
    return {
      ...audio,
    }
  }
}
