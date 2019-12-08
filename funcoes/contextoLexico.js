const valor = 'Global'

// a funcao carrega consigo o contexto onde foi definida
function minhaFuncao(){
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()