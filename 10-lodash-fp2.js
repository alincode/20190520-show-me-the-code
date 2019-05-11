const _ = require('lodash')
const fp = require('lodash/fp')

// ============ Lodash
// The `lodash/map` iteratee receives three arguments
console.log(_.map(['6', '8', '10'], parseInt))

// ============ Lodash FP
// The `lodash/fp/map` iteratee is capped at one argument
console.log(fp.map(parseInt)(['6', '8', '10']))

// https://github.com/lodash/lodash/blob/master/map.js
// https://github.com/lodash/lodash/blob/npm/fp/map.js
