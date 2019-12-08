const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

//interpolação
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

//expressoes
console.log(`1 + 1 = ${1 + 1}`)

//os templates podem invocar funções
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
