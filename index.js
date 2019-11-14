const queueMicrotask = require('queue-microtask')

const cancelled = new Set

module.exports = {
  setMicrotask (fn, ...args) {
    let sym = Symbol('microtask')
    queueMicrotask(() => {
      if (cancelled.has(sym)) {
        cancelled.delete(sym)
        return
      }
      fn(...args)
    })
    return sym
  },
  clearMicrotask (sym) {
    cancelled.add(sym)
  }
}
