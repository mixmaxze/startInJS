console.log('01)', '1' == 1) // é igual?
console.log('02)', '1' === 1) // é estritamente igual?
console.log('03)', '3' != 3) // é diferente?
console.log('04)', '3' !== 3) // é estritamente diferente?

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) //os dois tem mesmo tipo e valor
console.log('12)', null == undefined)
console.log('13)', null === undefined)