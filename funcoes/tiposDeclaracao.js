// function declaration
// o interpretador do JS carrega primeiro as functions declarations
console.log(soma(3, 4)) //pode ser chamado antes da função, caso seja a declaração tradicional

function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4)) 

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))
