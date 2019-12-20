//o array é heterogêneo: pode guardar vários tipos
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //retorna undefined

valores[4] = 10
console.log(valores)
console.log(valores.length) //retorna o tamanho do array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) //retira o ultimo elemento do array
delete valores[0] //deleta o valor de um indice do array
console.log(valores)

console.log(typeof(valores)) //valores é do tipo object

const valores2 = [123, "abc", 456]
console.log(valores2.pop()) //remove o ultimo elemento do array
console.log(valores2)

const [a, ,c,d] = [3,,4,5,6]
console.log(a,c,d)
