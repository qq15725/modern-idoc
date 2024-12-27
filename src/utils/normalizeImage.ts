import type { IDOCImageProp, IDOCNormalizedImageProp } from '../interfaces'

export function normalizeImage(image?: IDOCImageProp): IDOCNormalizedImageProp | undefined {
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
