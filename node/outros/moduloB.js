let a = 2 // isso aqui é visível APENAS DENTRO DO MÓDULO

// Já com o module.exports, isso é visível para outros arquivos
module.exports = {
     bomDia: 'Bom dia',
     boaNoite() {
          return 'Boa noite'
     },
     boaTarde() {
          return 'Boa Tarde'
     }
}
