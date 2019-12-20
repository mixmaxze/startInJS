const imprimirResultado = function(nota) {

    switch (Math.floor(nota)) // a expressao é um valor, nao true ou false
        {   case 10: case 9:
                console.log("Quadro de honra") //se for 10 ou 9
                break
            case 8: case 7:
                console.log('Aprovado')
                break
            case 6: case 5: case 4:
                console.log('Recuperação')
                break
            case 3: case 2: case 1: case 0:
                console.log('Reprovado')
                break
            default: //o default pode ficar em qualquer posição, porém precisa de break caso não seja o ultimo
                console.log('Nota inválida')
    }

}

imprimirResultado(7)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
