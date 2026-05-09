import { clearUndef } from '../utils'

export interface ConnectionAnchor {
  id: string
  idx?: number
}

export interface Connection {
  start?: ConnectionAnchor
  end?: ConnectionAnchor
}

export interface NormalizedConnection {
  start?: ConnectionAnchor
  end?: ConnectionAnchor
}

export function normalizeConnection(connection: Connection): NormalizedConnection {
  return clearUndef({
    start: connection.start,
    end: connection.end,
  })
}
