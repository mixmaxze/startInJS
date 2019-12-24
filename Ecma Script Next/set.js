// Conjunto não indexado que não aceita repetição

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians') // pode encadear os adds
times.add('Flamengo')
times.add('Vasco') // nao pode repetir

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes) // as repetições são removidas
console.log(nomesSet)