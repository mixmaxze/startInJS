// Array é uma estrutura dinâmica
// Suporta diferentes tipos

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' //substitui elemento no array
aprovados.push('Abia') // adiciona elemento no array
console.log(aprovados.length)

aprovados[9] = 'Rafael' // 4,5,6,7 e 8 serão undefined
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // ordena o array (elems vazios vão para o finak)
console.log(aprovados)

delete aprovados[1] // deleta o elemento do índice do array
console.log(aprovados[1]) // se torna undefined dps de deletado
console.log(aprovados[2]) // e não altera os outros índices

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // começa do Carlos e exclui 2 elementos
// depois, adiciona 'Elemento1' e 'Elemento2' 
console.log(aprovados)