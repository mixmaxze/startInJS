// pessoa -> endereço de memória (123) -> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> novo endereço de memória(456) -> {...}
// pessoa = { nome: 'Ana'}

Object.freeze(pessoa) // nada de pessoa pode ser alterado a partir de agora
pessoa.nome = 'Maria' // essa tentativa é ignorada
delete pessoa.nome // essa também
console.log(pessoa.nome)
console.log(pessoa)

// criar o objeto já constante
const pessoaConstante = Object.freeze( { nome: 'Joao'} )
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)