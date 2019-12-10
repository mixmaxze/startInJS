// Object.preventExtensions
// Garante que o objeto não receberá novos atributos
const produto = Object.preventExtensions({
     nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha' // posso alterar os atributos
delete produto.tag // posso deletar os atributos
produto.descricao = 'Borracha escolar branca' // mas nao posso adicionar novos atributos
console.log(produto)

// Object.seal
// Impede a adição ou remoção de atributos
// Mas ainda é possível alterá-los
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes
// Proibe adição, remoção ou mudança de atributos
