let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1

//negacao da negacao retorna o valor booleano da variavel
console.log(!!isAtivo)

//negacao retorna o valor booleano contrario da variavel
console.log(!isAtivo)

//tudo o que é true em JavaScript
console.log('os verdadeiros...')
console.log(!!"abcdefg")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

//tudo o que é false em JavaScript
console.log("os falsos...")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("pra finalizar...")
console.log(!!('' || null || ' ')) //retorna true, pois 1 deles é true
console.log('' || null || 'epa' || 123) //retorna o primeiro valor true da expressao
console.log('' || null || 123 || "epa") //retorna o primeiro valor true da expressao

let nome = 'Lucas'
console.log(nome || 'Desconhecido')