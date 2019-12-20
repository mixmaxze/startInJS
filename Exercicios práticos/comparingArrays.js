function checkEquals(arr1, arr2) {
     /*if (arr1.length != arr2.length) {
          return false
     }

     let valor = true

     for (let i = 0; i < arr1.length; i++) {
          valor &= (arr1[i] === arr2[i])
     }

     return !!valor*/

     // solução mais inteligente:
     return arr1.toString() === arr2.toString()
}

console.log(checkEquals([4, 7, 6], [4, 5, 6]))