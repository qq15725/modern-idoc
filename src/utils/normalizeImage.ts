import type { ImageDeclaration, ImageProp } from '../interfaces'

export function normalizeImage(image?: ImageProp): ImageDeclaration | undefined {
  if (!image || image === 'none') {
    return undefined
  }
  else if (typeof image === 'string') {
    return {
      src: image,
    }
  }
  else {
    return image
  }
}
