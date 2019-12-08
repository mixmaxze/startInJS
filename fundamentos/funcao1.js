//Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
imprimirSoma()
imprimirSoma("a", "b")

//Funcao com retorno
function soma(a = 0, b = 0){ //valor padrao do b é 0
    return a + b
}

soma(2, 3)
console.log(soma(1, 2))
console.log(soma(2))
console.log(soma())
