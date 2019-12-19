const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // invocando a função Factory
const contadorD = require('./instanciaNova')()

// Instância única
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

// Novas instâncias
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
