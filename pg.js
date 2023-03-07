const testInput = [	[' ', ' ', 'X'], 
					[' ', 'X', ' '], 
					['X', ' ', ' '] ]

function calculateGameState(boardValues) {
	for(let row = 0; row < 3; row++) {
		if(boardValues[row][2] && boardValues[row][1] && boardValues[row][0] === ('X' || 'O')) {
			return boardValues[row][0];
		}
	}

	for(let col = 0; col < 3; col++) {
		if(boardValues[2][col] && boardValues[1][col] && boardValues[0][col] === ('X' || 'O')) {
			return boardValues[0][col];
		}
	}

	if(	(boardValues[0][0] && boardValues[1][1] && boardValues[2][2]) || 
		(boardValues[2][0] && boardValues[1][1] && boardValues[0][2]) === ('X' || 'O')) {
		return boardValues[1][1];
	}

	return false;
}
console.log(calculateGameState(testInput));

