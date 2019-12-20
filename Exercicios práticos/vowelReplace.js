const canCapture = ([yourRook, opponentsRook]) => {
	return (yourRook[0] === opponentsRook[0]
		 || yourRook[1] === opponentsRook[1]) ? true : false
}