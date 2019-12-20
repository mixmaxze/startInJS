// forEach pode receber elemento, indice e array

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// Para cada elemento que é percorrido no array
// ele passa uma callback,
// que possui o elemento e o índice correspondente daquele elemento
aprovados.forEach(function (elemento, indice) {
     console.log(`${indice + 1}) ${elemento}`)
})
aprovados.forEach(elemento => console.log(elemento))

// Posso criar uma função previamente
// e passá-la como parâmetro para o forEach
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

