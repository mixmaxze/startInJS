const calculaFibonacci = (valor)=> {

    if (valor == 1 || valor == 0 )
        return 1
    
    return calculaFibonacci(valor-1) + calculaFibonacci(valor-2)

}

for (let i = 0; i < 20; i++){

    console.log(`Fibonacci de ${i} = ${calculaFibonacci(i)}`)

}