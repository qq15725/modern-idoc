export interface NormalizedAudio {
  src: string
}

export type AudioProperty =
  | string
  | NormalizedAudio

export function normalizeAudio(audio: AudioProperty): NormalizedAudio | undefined {
  if (typeof audio === 'string') {
    return { src: audio }
  }
  else {
    return audio
  }
}
