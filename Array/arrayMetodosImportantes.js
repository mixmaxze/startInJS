// Alguns métodos importantes

const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa é deletado de pilotos!
console.log(pilotos)

pilotos.push('Verstappen') // Add Verstappen em pilotos!
console.log(pilotos)

pilotos.shift() // Remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona no primeiro elemento!
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // Massa sai novamente :(
console.log(pilotos)

// Pega um novo array a partir de um índice
const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

// vai do elemento 1 até o elemento 4, sem incluir o 4
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)

