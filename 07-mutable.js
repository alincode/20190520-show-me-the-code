// ============ mutable
const _ = require('lodash')

const hobbies = ['coding', 'reading', 'travel']
// const hobbies = Object.freeze(['coding', 'reading', 'travel'])

const firstTwo = hobbies.splice(0, 2)
// const firstTwo = _.cloneDeep(hobbies).splice(0, 2)

console.log('Q1:', firstTwo)
console.log('Q2:', hobbies)
