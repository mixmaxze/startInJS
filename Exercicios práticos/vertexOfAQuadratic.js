function findVertex(a, b, c) {

     let delta = Math.pow(b, 2) - 4 * a * c

     let x = -b / (2 * a)
     let y = -delta / (4 * a)

     x === 0 ? x *= x : x = x
     y === 0 ? y *= y : y = y

     return [x, y]

}

console.log(findVertex(1, 0, 25))