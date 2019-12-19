console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

// Dessas três formas, a, b e c ficam visíveis para fora
this.a = 1
exports.b = 2
module.exports.c = 3

// Nao adianta fazer assim:
exports = null
console.log(module.exports)
// Nem assim:
exports = {
     nome: 'Teste'
}

console.log(module.exports)

// Mas assim funciona:
module.exports = {publico: true}
