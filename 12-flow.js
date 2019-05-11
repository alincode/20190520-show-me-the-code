const fp = require('lodash/fp')

const tax = x => {
  console.log('step1')
  return x * 1.05
}

const discount = x => {
  console.log('step2')
  return x * 0.9
}

const vip = x => {
  console.log('step3')
  return x * 0.95
}

console.log('=== case 1:', vip(discount(tax(100))))
// console.log('=== case 1-1:', vip(discount(tax(200))))

const getPrice = fp.flow([tax, discount, vip])
console.log('=== case 2:', getPrice(100))
// console.log('=== case 2-1:', getPrice(200))
// 好處？
// 更宣告式的寫法 / 更可讀

const getPrice2 = fp.compose([vip, discount, tax])
console.log('=== case 3:', getPrice2(100))
