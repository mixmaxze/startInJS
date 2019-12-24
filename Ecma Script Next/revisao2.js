// Arrow Function (são sempre anônimas, pois não possuem nome)
const soma = (a, b) => a + b // caso seja 1 parâmetro, os parênteses não são necessários
console.log(soma(2, 3))

// Arrow Function (this)
// O this da Arrow Function está associada ao local no qual a função foi escrita
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parâmetro default
function log(texto = 'Node') {
     console.log(texto)
}
log() // assume valor padrão
log(undefined) // assume valor padrão
log(null) // assume null
log('Hummmmm')

// Operador rest
function total(...numeros) {
     let total = 0
     numeros.forEach((n, i, array) => total += n)
     return total
}
console.log(total(2, 3, 4, 5))
console.log(total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

