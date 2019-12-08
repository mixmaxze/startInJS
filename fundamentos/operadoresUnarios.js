let num1 = 1
let num2 = 2

num1++ //menos apressado
console.log(num1)
--num1 //tem prioridade (mais apressado)
console.log(num1)

console.log(++num1 === num2--) //o ++num1 tem precedencia sobre o ===
console.log(num2-- === ++num1)
