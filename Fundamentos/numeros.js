//Tipo number serve tanto pra inteiros quanto pra valores quebrados
const peso1 = 1.1
const peso2 = Number('2.1') //converte a String pra um numero

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

//Define a quantidade de casas decimais
console.log(media.toFixed(2)) 
console.log(media.toString())

console.log("Vendo toString:")
//O parâmetro 2 passado no toString retorna o valor binário 
console.log(media.toString(2))

//number em minúsculo é o tipo do dado quando você tem o valor numérico
console.log(typeof media)

//Number em maíusculo é uma função
console.log(typeof Number)