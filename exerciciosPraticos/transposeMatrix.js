let matriz = [[1,2], [2,3], [3,4]]

console.log(matriz.reduce(function(firstElement, secondElement) {
     return firstElement.concat(secondElement)
}).join(" "))