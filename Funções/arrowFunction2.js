function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade ++ //usando arrow function, o this não varia de acordo com quem tá chamando
        console.log(this.idade)
    }, 1000)
}

new Pessoa