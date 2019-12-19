console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports) // fora de uma função, o this APONTA para o exports

function logThis() {
     console.log('Dentro de uma função...')
     console.log(this === exports) // dentro de uma função, o this NÃO APONTA para exports
     console.log(this === module.exports) // false
     console.log(this === global) // true

     this.perigo = '...' // isso é colocado no escopo global
}

const logThis2 = () => {

     this.nome = 'Matheus'

     console.log('Dentro de uma arrow function...')
     console.log(this === global) // isso é falso
     console.log(this)
}

logThis()
logThis2()

