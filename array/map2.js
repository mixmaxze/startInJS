// Implementando o map

const nums = [1, 2, 3, 4, 5]

Array.prototype.map2 = function(callback) {
     const newArray = []
     for (let i = 0; i < this.length; i++) {
          newArray.push(callback(this[i], i, this))
     } 
     return newArray
}

let resultado = nums.map2(elemento => elemento * 2)
console.log(resultado)

// Retornando um array com os preços do array de JSON's
const carrinho = [
     '{ "nome": "Borracha", "preco": 3.45 }',
     '{ "nome": "Caderno", "preco": 13.90}',
     '{ "nome": "Kit de Lapis", "preco": 41.22}',
     '{ "nome": "Caneta", "preco": 7.50}'
]

const retornaPrecos = function(array) {
     return array.map2(function(elemento){
          return `R$ ${parseFloat(JSON.parse(elemento).preco).toFixed(2).replace('.', ',')}`
     })
}
console.log(retornaPrecos(carrinho))

