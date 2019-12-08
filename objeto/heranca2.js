// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = 'Z' // não faça isso em casa!
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: "3" }
const filho = { __proto__: pai, attr3: 'C'}

console.log(filho.attr1) //no filho nao tem, nem no pai, mas tem no avo
console.log(filho.attr0, filho.attr2, filho.attr3)
    
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing (sombreamento) variavel local sombreia variaveis de escopos mais externos
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

// Estabelecer relação de protótipos entre objetos:
Object.setPrototypeOf(ferrari, carro) 
Object.setPrototypeOf(volvo, carro)
console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.velAtual, ferrari.velMax)
console.log(ferrari.status())