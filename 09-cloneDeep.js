// ============ clone deep

const _ = require('lodash')

const addToCart = (cart, item, quantity) => {
  const newCart = _.cloneDeep(cart)

  newCart.items.push({
    item,
    quantity,
  })
  return newCart
}

let result = { items: [] }
result = addToCart(result, '你所不知道的 JS - ES6 與未來的發展', 1)
result = addToCart(result, '你所不知道的 JS - 非同步處理與效能', 1)

console.log(result)
