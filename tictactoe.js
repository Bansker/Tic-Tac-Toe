/**
 * @author	Bansker
 * @date	07.03.2023
 * @file	pg.js
 * 
 * 
 * @todo	document code
 * 
 */

// Strict mode
'use strict';

// Testinput
const testInput = [	[' ', ' ', ' '], 
					[' ', ' ', ' '], 
					[' ', ' ', ' '] ]


/**
 * Global constants
 * ================================================================================
 */
const BOARD_INIT_VALUES = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
const A1 = 0
const A2 = 1
const A3 = 2


/**
 * Generate and return the 3x3 board
 * @param {boardValues} 3x3 Array
 */
function generateBoard(boardValues) {
	let board = '';
	let drawXAxis = '';					// Will only be used to shorten the code
	let rowNames = ['A', 'B', 'C'];

	// Initial line
	board += '\n' + ' ' + ' 1   2   3\n';

	// Draw the 3x3 board with positional values
	for(let i = 0; i < 3; i++){
		drawXAxis = `${rowNames[i]}` + ` ${boardValues[i][0]} | ${boardValues[i][1]} | ${boardValues[i][2]}`

		board +=  (i !== 2) ? drawXAxis + '\n -----------\n'
							: drawXAxis + '\n';
	}

	return board;
}

//console.log(generateBoard(testInput));

/**
 * The core of the game. Calculate positions of X's and O's in the 3D Array.
 * Return either the winner (strings 'X' or 'O') or false (no winning positions)
 * @param 
 */
function calculateGameState(boardValues) {

	/**
	 * @todo
	 */
	for(let row = 0; row < 3; row++) {
		if(boardValues[row][2] && boardValues[row][1] && boardValues[row][0] === ('X' || 'O')) {
			return boardValues[row][0];
		}
	}

	/**
	 * @todo
	 */
	for(let col = 0; col < 3; col++) {
		if(boardValues[2][col] && boardValues[1][col] && boardValues[0][col] === ('X' || 'O')) {
			return boardValues[0][col];
		}
	}

	/**
	 * @todo
	 */
	if(	((boardValues[0][0] && boardValues[1][1] && boardValues[2][2]) === ('X' || 'O')) || 
		((boardValues[2][0] && boardValues[1][1] && boardValues[0][2]) === ('X' || 'O'))
		) {

		return boardValues[1][1];
	}

	// Return false when game is not decided
	return false;
}
console.log(calculateGameState(testInput));


/**
 * Play one game of Tic Tac Toe
 */
function playOneRound(boardValues, choicePlayer1, choicePlayer2) {

}


/**
 * Main Function building the game
 * ================================================================================
 */
function ticTacToe() {
	let boardValues = BOARD_INIT_VALUES	// Initial Board State

	do {
		
		gameState = calculateGameState(boardValues)
		generateBoard(boardValues)
	} while(gameState === false)

	console.log(gameState, 'Wins!')

	return;
}

// ticTacToe();