function isBetween(first, last, word) {
	return [first, last, word].sort()[1] === word 
}

console.log(isBetween("apple", "banana", "azure"))