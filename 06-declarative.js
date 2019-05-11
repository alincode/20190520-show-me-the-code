console.log('\n========= Declarative programming (宣告式) =======')

// in ES6 more functions operators e.g. `.map` are supported
// avoid `for`, `while`, then use `map`
// avoid use share state

const ex02 = books =>
  books.map(book => {
    book.price = book.pages * 2
    return book
  })

console.log(
  ex02([
    { name: 'JavaScript', pages: 450 },
    { name: 'Angular', pages: 902 },
    { name: 'Node', pages: 732 },
  ])
)
