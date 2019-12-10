// JSON é um formato textual
// É muito usado para comunicação entre sistemas
// Não é algo que é executado

const obj = { a: 1, b: 2, c:3, soma() { return a+b+c}}
console.log(JSON.stringify(obj))
// console.log(JSON.parse("{ a: 1, b: 2, c:3 }"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}"))

// Todo texto dentro do parse deve ser delimitado por "" (aspas duplas)
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))
