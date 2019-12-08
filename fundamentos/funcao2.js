// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => { //a seta substitui o nome function
    return a + b
}

console.log(soma(4, 7))

//retorno implicito

const subtracao = (a, b) => a - b
const elevarAoQuadrado = a => Math.pow(a, 2) //quando so tem um parametro, nao e necessario colocar parenteses nele

console.log(elevarAoQuadrado(2))

