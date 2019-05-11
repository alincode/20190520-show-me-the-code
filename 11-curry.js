const add = (a, b, c) => a + b + c
// add(1, 2, 3)

const add1 = add.bind(this, 1)
console.log('add1:', add1(2, 3))

// auto curry：
// 可以讓你在只提供部分參數的情況下，輕鬆地在已有函數的基礎上創建新函數。

const curry = a => (b, c) => a + b + c
const add2 = curry(2)
console.log('curry:', add2(2, 3))

// 好處？
// 1. 延遲產生
