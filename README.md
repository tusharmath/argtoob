# argtoob

[![Build Status][travis-svg]][travis-build]
[![npm][npm-version-svg]][npm]

Function to convert a list of arguments to an object. This module is created as an alternative to the request [lodash#2004][0] and of course with @jdalton's permission :-)

## Install

```bash
npm i argtoob --save
```

## Usage
```javascript
const t = require('argtoob')

const toObj = t('a', 'b', 'c') // returns a function
toObj(1, 2, 3) // returns {a: 1, b: 2, c: 3}

```

## Examples

#### 1. Create a key value pair from an object

```javascript
_.map({a: 1, b: 2, c: 3}, targs('value', 'key'))

/* OUTPUTS
  [
    {key: 'a', value: 1},
    {key: 'b', value: 2},
    {key: 'c', value: 3}
  ]
*/
```

#### 2. Merge Streams with RxJS

```javascript
const resize = Rx.Observable.fromEvent(window, 'resize')
const scroll = Rx.Observable.fromEvent(window, 'scroll')

Rx.Observable.combineLatest(resize, scroll, targs('resize', 'scroll'))
```

[0]: https://github.com/lodash/lodash/issues/2004#issuecomment-185087141
[travis-svg]: https://travis-ci.org/tusharmath/argtoob.svg?branch=master
[travis-build]: https://travis-ci.org/tusharmath/argtoob
[npm-version-svg]: https://img.shields.io/npm/v/argtoob.svg
[npm]: https://www.npmjs.com/package/argtoob
