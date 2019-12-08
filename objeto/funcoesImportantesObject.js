const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // retorna um array com as chaves do objeto
console.log(Object.values(pessoa)) // retorna um array com os valores do objeto
console.log(Object.entries(pessoa)) // um array de arrays, em cada um desses possui chave e valor do objeto

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true, // será enumerada na exibição
    writable: false, // a propriedade nao pode ser reescrita
    value: '01/01/2019' // definir o valor da propriedade do objeto
}) 
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
Object.assign(dest, o1, o2)
console.log(dest)
const obj = Object.assign(dest, o1, o2) // concatena os objetos e até sobrescreve valores
console.log(dest) // o a: 4 substituiu o a: 1

Object.freeze(obj)
obj.c = 1234
console.log(obj)