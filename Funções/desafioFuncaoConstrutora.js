function Pessoa(nome) {

    this.nome = nome

    this.falar = _ => {
        console.log(`Meu nome é ${this.nome}.`)
    }
}

const p1 = new Pessoa('João')
p1.falar()
console.log(typeof Pessoa)
console.log(typeof p1)