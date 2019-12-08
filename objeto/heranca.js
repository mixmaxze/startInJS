// Conhecendo herança
// Todo objeto em JS tem uma referência ao Object.prototype
// Os atributos desses protótipos podem ser acessados pelos objetos filhos

const ferrari = {
    modelo: 'F40',
    velMax: 324
    // [[Prototype]]
}

const volvo = {
    modelo: 'V40',
    velMax: 200
    // [[Prototype]]
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) //o proto do Object.prototype é nulo

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)