import { normalizeDocument } from '../src'
import { pdf } from './pdf'
import { pptx } from './pptx'

console.warn(normalizeDocument(pdf))

console.warn(normalizeDocument(pptx))
