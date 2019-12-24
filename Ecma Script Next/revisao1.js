// let e var
{
     var a = 2
     let b = 3
     console.log(b)
}
console.log(a)

// Template String
// Considera tabs e quebras de linhas
const produto = 'iPad'
console.log(`Nome do produto: ${produto}. 
É muito caro!`)

// Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)
