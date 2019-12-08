const imprimirResultado = function(nota) {
    if(nota >= 7) 
        console.log("Aprovado!")
    else 
        console.log("Reprovado!")
    
}

imprimirResultado(7)
imprimirResultado('Epa!') // nao passa pelo if, entao vai para o else
