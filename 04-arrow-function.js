// ========== way 1: not arrow way
function hello(name) {
  return `hi, ${name}`
}

// const hello = function (name) {
//   return `hi, ${name}`
// }

console.log(hello('A-Lin'))

// ========== way 2: es6 arrow function

const hello2 = name => `hi, ${name}`
console.log(hello2('A-Lin'))

const f = x => 2 + x
console.log(f(2))
