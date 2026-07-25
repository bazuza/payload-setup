import * as migration_20260725_140605 from './20260725_140605'

export const migrations = [
  {
    up: migration_20260725_140605.up,
    down: migration_20260725_140605.down,
    name: '20260725_140605',
  },
]
