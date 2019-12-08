// IIFE -> Immediately Invoked Function Expression

(function() {
    // variáveis criadas aqui só estarão disponíveis aqui

    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()

// É o mesmo que:
console.log('Será executado na hora!')
console.log('Foge do escopo mais abrangente!')
