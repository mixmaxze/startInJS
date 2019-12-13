const numInStr = arr => arr.filter(function(element){
     return /[0-9]/.test(element)
})

console.log(numInStr(["1a", "a", "2b", "b"]))