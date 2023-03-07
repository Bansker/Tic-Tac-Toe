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
const COORDINATES = {A: 0, B: 1, C: 2}

// Node Lib prompt-sync
const prompt = require('prompt-sync')();


/**
 * Generate and return the 3x3 board
 * @param	{Array} 	boardValues 3x3 index Array (2D)
 * @returns	{String}				formatted board grid with values (String literal)
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
 * @param	{Array} 	boardValues 3x3 index Array (2D)
 * @returns 						Single Char String or False
 */
function calculateGameState(boardValues) {

	/**
	 * Check rows for equal elements and return it's char if all are equal
	 */
	for(let row = 0; row < 3; row++) {
		if(boardValues[row][2] && boardValues[row][1] && boardValues[row][0] === ('X' || 'O')) {
			return boardValues[row][0];
		}
	}

	/**
	 * Check columns for equal elements and return it's char if all are equal
	 */
	for(let col = 0; col < 3; col++) {
		if(boardValues[2][col] && boardValues[1][col] && boardValues[0][col] === ('X' || 'O')) {
			return boardValues[0][col];
		}
	}

	/**
	 * Check diagonals for equal elements and return it's char if all are equal
	 */
	if(	((boardValues[0][0] && boardValues[1][1] && boardValues[2][2]) === ('X' || 'O')) || 
		((boardValues[2][0] && boardValues[1][1] && boardValues[0][2]) === ('X' || 'O'))
		) {

		return boardValues[1][1];
	}

	// Return false if no char appears 3 times in a row
	return false;
}


/**
 * Split up the input string and assign it to a grid coordinate
 * @param	{string} 	playerInput 	Input of Player 1 or 2
 * @param	{Array} 	boardValues 	3x3 index Array (2D)
 * @returns {Array}						3x3 index Array (2D), false if wrong input
 */
function playOneRound(boardValues, playerInput) {
	let playerInput = playerInput.split('');
	



	return;
}


/**
 * Main Function building the game
 * ================================================================================
 */
function ticTacToe() {
	let boardValues = BOARD_INIT_VALUES	// Initial Board State
	let togglePlayer = 0;
	let XorO

	do {

		playOneRound(boardValues, ...);
		
		gameState = calculateGameState(boardValues);
		generateBoard(boardValues);

		togglePlayer = !togglePlayer;
	} while(gameState === false)

	console.log(gameState, 'Wins!')

	return;
}

// ticTacToe();