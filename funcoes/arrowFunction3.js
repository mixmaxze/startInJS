//O this, com arrow function, é um this que aponta para o contexto em que foi criado

let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) //o this aponta pro global

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //o this não aponta pro global
comparaComThis(obj) //o this aponta pro obj

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) //o this não é o global no caso de um arrow function
comparaComThisArrow(module.exports)
    
// a arrow function tem prioridade sobre o bind
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
