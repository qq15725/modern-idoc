import type { Effect, NormalizedEffect } from '../effect'
import type { FillObject, NormalizedFill } from '../fill'
import { normalizeEffect } from '../effect'
import { normalizeFill } from '../fill'
import { clearUndef, pick } from '../utils'

export interface NormalizedBaseForeground {
  fillWithShape?: boolean
  /**
   * 图片效果叠层（对应 bige 的"图片样式"），每层为通用 Effect，按数组顺序叠加。
   * 多重描边 = 多个层（每层一条 outline）；位移重影 = transform: translate()。
   * 渲染端按需把 `图片 + effects` 烘焙到运行时 canvas，不入数据。
   */
  effects?: NormalizedEffect[]
}

export type NormalizedForeground =
  & NormalizedBaseForeground
  & NormalizedFill

export type ForegroundObject =
  & Partial<Omit<NormalizedBaseForeground, 'effects'>>
  & FillObject
  & { effects?: Effect[] }

export type Foreground =
  | string
  | ForegroundObject

export function normalizeForeground(foreground: Foreground): NormalizedForeground | undefined {
  if (typeof foreground === 'string') {
    return {
      ...normalizeFill(foreground),
    }
  }
  else {
    return clearUndef({
      ...normalizeFill(foreground),
      ...pick(foreground, ['fillWithShape']),
      effects: foreground.effects?.map(normalizeEffect),
    })
  }
}
