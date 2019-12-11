// concatenar arrays

const filhas = ['Valeaskah', 'Cibalena']
const filhos = ['Uoxiton', "Uesclei"]
const todos = filhas.concat(filhos, 'Fulano') // pode ter um param adicional
console.log(todos, filhas, filhos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))