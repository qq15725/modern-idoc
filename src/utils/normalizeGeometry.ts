import type { IDOCGeometryProp, IDOCNormalizedGeometryProp } from '../interfaces'

export function normalizeGeometry(geometry?: IDOCGeometryProp): IDOCNormalizedGeometryProp | undefined {
  if (!geometry || geometry === 'none') {
    return undefined
  }
  else if (typeof geometry === 'string') {
    return {
      data: [
        { data: geometry },
      ],
    }
  }
  else if (Array.isArray(geometry)) {
    return {
      data: geometry.map((data) => {
        return {
          data,
        }
      }),
    }
  }
  else {
    return {
      ...geometry,
      data: geometry.data.map((data) => {
        if (typeof data === 'string') {
          return {
            data,
          }
        }
        return data
      }),
    }
  }
}
