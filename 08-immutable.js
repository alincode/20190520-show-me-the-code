// ============ immutable
// once you make the data, don't change it.

// const hobbies = ['coding', 'reading', 'travel']
const hobbies = Object.freeze(['coding', 'reading', 'travel'])

const firstTwo = hobbies.slice(0, 2)

console.log('Q1:', firstTwo)
console.log('Q2:', hobbies)
