export interface AudioDeclaration {
  src: string
}

export type AudioProperty =
  | string
  | AudioDeclaration

export function normalizeAudio(audio: AudioProperty): AudioDeclaration | undefined {
  if (typeof audio === 'string') {
    return { src: audio }
  }
  else {
    return audio
  }
}
