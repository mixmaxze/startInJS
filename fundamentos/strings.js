const escola = "Cod3r"

//String é uma CADEIA de caracteres que se inicia em 0

0 | "C" | 1 | "o" | 2 | "d" | 3 | "3" | 4 | "r" | 5

//retorna o caractere no determinado índice
console.log(escola.charAt(4))

//retorna valor vazio quando a string nao tem tal índice
console.log(escola.charAt(5))

//retorna o valor dele na tabela Unicode/ASCC
console.log(escola.charCodeAt(3))

//retorna o indice do tal caractere
console.log(escola.indexOf('3'))

//determina que parte da string vc quer exibir
console.log(escola.substring(1))
console.log(escola.substring(0, 3))
console.log(escola.substring(0, 5))

//concatena strings
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + '!')
    //concatena a string com o numero, não soma
    //isso acontece porque o + tem sentido nas strings, ja que ele concatena
    console.log('3' + 2)
    console.log(2 + '3')
    //nao funciona com o -
    console.log('3' - 2) //retorna o inteiro 1

//substitui o caractere de determinado indice por um outro caractere escolhido
console.log(escola.replace(3, "e"))

//substitui os digitos da string pela letra e
console.log(escola.replace(/\d/, 'e'))

//substitui todas os caracteres por outro caractere escolhido
//lembrar do g de global
console.log(escola.replace(/\w/g, "e"))

//substitui somente o primeiro caractere por outro caractere
console.log(escola.replace(/\w/, "e"))

//Separa as strings em um array de strings
console.log('Ana,Maria,Pedro'.split(","))
console.log('Ana,Maria,Pedro'.split(/,/))
