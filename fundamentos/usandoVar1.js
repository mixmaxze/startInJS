//Variavel criada fora de função é uma variável GLOBAL
//var ou é global (visível pra todos) ou faz parte do escopo de uma função
{ 
    { 
        { 
            { 
                var sera = 'Será???' 
                console.log(sera)
            }
        } 
    } 
}
console.log(sera) //a variavel var pode ser usada fora do bloco onde foi declarada

function teste(){
    var local = 123     //o escopo da variavel é local da função
    console.log(local)
}

teste()
console.log(local) //fora do escopo da funcao, a var nao pode ser acessada

