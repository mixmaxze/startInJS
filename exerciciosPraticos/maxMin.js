const difference = nums => {
	var max = nums.reduce(function(a, b) {
  	return Math.max(a, b);
	})
	
	var min = nums.reduce(function(a, b) {
		return Math.min(a, b)
	})
	
	return max - min
}