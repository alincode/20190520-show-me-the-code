// Side Effect 是指一個 function 做了跟本身運算返回值，以外的事情
function update(user) {
  user.name = 'alincode'
  return
}

let user = { name: 'alin' }
console.log('Q1:', update(user))
console.log('Q2:', user)
