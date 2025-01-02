import type { IDOCGeometryDeclaration, IDOCGeometryProp } from '../interfaces'

export function normalizeGeometry(geometry?: IDOCGeometryProp): IDOCGeometryDeclaration | undefined {
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
        if (typeof data === 'string') {
          return {
            data,
          }
        }
        return data
      }),
    }
  }
  else {
    return geometry
  }
}
