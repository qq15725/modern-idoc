import type { IDOCImageDeclaration, IDOCImageProp } from '../interfaces'

export function normalizeImage(image?: IDOCImageProp): IDOCImageDeclaration | undefined {
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
