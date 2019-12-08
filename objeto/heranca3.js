const pai = {nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai) // cria filha1 tendo o protótipo pai
//filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha3 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})
console.log(filha3.nome)
filha3.nome = 'Carla' // nao funciona, enumerable falso
console.log(`${filha3.nome} tem cabelo ${filha3.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha3))

for (let key in filha3) {
    filha3.hasOwnProperty(key) ? // filha3 possui esse atributo próprio?
    console.log(`Possui o próprio atributo ${key}`) : console.log(`Por herança: ${key}`)
}