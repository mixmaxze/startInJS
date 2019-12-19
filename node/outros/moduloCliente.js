// Essa classe usará outros módulos

const moduloA = require('./moduloA') // mesma pasta, arquivo moduloA
const moduloB = require('./moduloB.js') // o .js é opcional

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB.boaTarde())
console.log(moduloB)