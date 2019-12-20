// novo recurso do ES2015

const pessoa = {

    nome: 'Ana',
    idade: 5,

    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }

}

const { nome, idade } = pessoa //tire de dentro do objeto pessoa, o nome e a idade
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorado = true} = pessoa //define um valor padrão para bemHumorado
console.log(sobrenome, bemHumorado) 

const {endereco: {logradouro, numero, cep}}  = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa
console.log(ag, num)