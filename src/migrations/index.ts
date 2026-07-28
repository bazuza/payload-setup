import * as migration_20260725_140605 from './20260725_140605'
import * as migration_20260728_113454 from './20260728_113454'

export const migrations = [
  {
    up: migration_20260725_140605.up,
    down: migration_20260725_140605.down,
    name: '20260725_140605',
  },
  {
    up: migration_20260728_113454.up,
    down: migration_20260728_113454.down,
    name: '20260728_113454',
  },
]
