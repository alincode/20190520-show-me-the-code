console.log('========= Imperative Pattern (指令式) =======')

let books = [
  { name: 'JavaScript', pages: 450 },
  { name: 'Angular', pages: 902 },
  { name: 'Node', pages: 732 },
]

function ex01(books) {
  let newArray = []
  for (let i = 0; i < books.length; i++) {
    books[i].price = books[i].pages * 2
    newArray.push(books[i])
  }
  return newArray
}

console.log('newArray:', ex01(books))

console.log('\n\n======= books 值被改變了 ======')
console.log('books:', books)
