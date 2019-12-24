// Map (não aceita chaves repetidas)

const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
     [function () { }, 'Função'],
     [{}, 'Objeto'],
     [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
     console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) // verifica se a chave está no objeto
chavesVariadas.delete(123) // retorna true se conseguiu deletar, false se a chave nao existe
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)
