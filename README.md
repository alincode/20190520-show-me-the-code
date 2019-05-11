# 20190520-show-me-the-code

分享的可以是一個簡單概念、一個小技巧，大啟發。

### what is functional programming?

In computer science, functional programming is a programming paradigm
a style of building the structure and elements of computer programs—that
treats computation as the evaluation of mathematical functions and
avoids changing-state and mutable data.

* paradigm: 是一組獨特的概念或思維模式，包括理論，研究方法

1. avoids changing-state
2. avoid side effect

### Good For

* more readable
    * 不 share state，很難寫出一個長 function
* ease of testing: 
    * 避免使用外部資源，只使用 input 值，很難有 side effect
    * 每個 function 都會有回傳值，可以被測試驗證。

### how to more functional

* less side effect
    * use no side effect function
    * less temporary variables, e.g. get data by query
* always return data
* immutable
  * avoids to modify function parameter
  * or use lodash.cloneDeep
* for, while ---> map

### some advice

* skip framework first, just focus on language

### FP libraries for JS

* Immutable.js: <https://immutable-js.github.io/immutable-js/>
* Functional Programming With Lodash/FP: <https://blog.codeminer42.com/functional-programming-with-lodash-fp-8fe0619b3024>
* Ramda: <https://ramdajs.com/docs/>