# set-microtask [![Build Status](https://travis-ci.org/dy/set-microtask.svg?branch=master)](https://travis-ci.org/dy/set-microtask) [![unstable](https://img.shields.io/badge/stability-unstable-yellow.svg)](http://github.com/badges/stability-badges)

`queueMicrotask` with `setTimeout` API.

[![NPM](https://nodei.co/npm/set-microtask.png?mini=true)](https://nodei.co/npm/set-microtask/)

```js
import { setMicrotask, clearMicrotask } from 'set-microtask'

setMicrotask(() => {
  console.log('tick')
})

setMicrotask(arg => {
  console.log(arg)
}, 'tack')

let id = setMicrotask(() => {
  console.log('oi oi oi')
})
clearMicrotask(id)

// ...
// tick tack
```

## But why?

...

## See also

* [wait-please](https://github.com/dy/wait-please) - waiters bar.

## License

MIT

<p align="right">HK</p>
