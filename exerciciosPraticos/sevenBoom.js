function sevenBoom(arr) {
     return ((arr.reduce(function (first, second) {
          return "" + first + second
     })).indexOf("7") > -1) ? "Boom!" : "there is no 7 in the array"
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]))
console.log(sevenBoom([1, 2, 3, 4, 5, 6]))
console.log(sevenBoom([1, 27, 3, 4, 5, 6]))