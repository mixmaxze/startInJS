function falarDepoisDe(segundos, frase) {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve(frase, 'abc')
          }, segundos * 1000)
     })
}

falarDepoisDe(3, 'Que legal!')
     .then(frase => {
          return frase.concat('???')
     })
     .then(outraFrase => console.log(outraFrase))
     .catch(e => console.log(e))