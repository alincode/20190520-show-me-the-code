const _ = require('lodash')
const fp = require('lodash/fp') // 與 Ramda 相似

// iteratee
function square(n) {
  return n * n
}

// _.map(collection, fn)
console.log(_.map(['6', '8', '10'], square))

// fp.map(fn)(collection);
// Immutable auto-curried iteratee-first data-last methods
console.log(fp.map(square)(['6', '8', '10']))

// https://github.com/lodash/lodash/blob/master/map.js
// https://github.com/lodash/lodash/blob/npm/fp/map.js
// https://github.com/lodash/lodash/wiki/FP-Guide
