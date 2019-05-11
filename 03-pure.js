// Pure / 透明度 / 可預測性
// 蛋 + 蔥 + 鹽 = 蛋花湯

// =============== pure function

function pureHello(name) {
  return `Hello, ${name}`
}

console.log('pureHello:', pureHello('A-Lin'))

// =============== not pure function

let name2 = 'A-Lin'
function notPureHello() {
  return `Hello, ${name2}`
}
console.log('notPureHello:', notPureHello('A-Lin'))
