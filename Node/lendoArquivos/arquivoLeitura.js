const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

// Leitura sincrona (não é recomendado para arquivos grandes):
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Leitura assincrona:
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
     const config = JSON.parse(conteudo)
     console.log(`${config.db.host}:${config.db.port}`)
})

// Se for arquivo .json, o require pode ser usado diretamente
const config = require('./arquivo.json')
console.log(config.db)

// Lendo pastas:
fs.readdir(__dirname, (err, arquivos) => { // __dirname é uma constante que representa o diretório atual
     console.log('Conteúdo da pasta...')
     console.log(arquivos)
})
