const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums){
    if (x == 5) break
    console.log(`Índice ${x} = ${nums[x]}`)
}

for (y in nums ){
    if (y % 2 == 0) continue //pula os indices pares
    console.log(`Índice ${y} = ${nums[y]}`)
}

console.log('Fim!')