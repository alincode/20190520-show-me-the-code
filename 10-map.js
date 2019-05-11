// parseInt(6) ===> 6
// parseInt(8) ===> 8
// parseInt(10) ===> 10

// parseInt(6, 0) ===> 6
// parseInt(8, 1) ===> Nan
// parseInt(10, 2) ===> 2

// iteratee
// function parseInt(x, base) {
//   return
// }

function map(array, iteratee) {
  let index = -1
  const length = array == null ? 0 : array.length
  const result = new Array(length)

  while (++index < length) {
    result[index] = iteratee(array[index], index, array)
    // result[index] = iteratee(array[index])
  }
  return result
}
