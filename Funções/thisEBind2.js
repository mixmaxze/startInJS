function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function () {
        self.idade++
        console.log("Vai dar tudo certo! :))")
    }, 500)
}

new Pessoa