import { setMicrotask, clearMicrotask } from './index.js'
import t from 'tape'

t('basic', async t => {
  let log = []

  setMicrotask((a, b) => {
    log.push(a, b)
  }, 'a', 'b')

  let id = setMicrotask(c => {
    log.push(c)
  }, 'c')
  clearMicrotask(id)
  clearMicrotask(id)

  setMicrotask(c => {
    log.push('d')
  })

  await ''

  t.deepEqual(log, ['a', 'b', 'd'])

  t.end()
})
