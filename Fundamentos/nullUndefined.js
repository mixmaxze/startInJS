let valor //não inicializado
console.log(valor)
// console.log(valor2) //o valor nem sequer foi declarado

valor = null //ausência de valor
console.log(valor)
//console.log(valor.toString()) //o nulo nao tem nenhuma referencia para o toString

const produto = {}
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined explicitamente
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)