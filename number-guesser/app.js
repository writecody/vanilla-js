/**
* Player must guess a number between a min and max
* Player gets a defined number of guesses
* Notify player of remaining guesses
* Notify the player of the correct answer if they lose
* Let the player choose to play again
*/

// Game values
let min = 1, 
	max = 10,
	winningNum = getRandomNum(min, max),
	guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
	minNum = document.querySelector('.min-num'),
	maxNum = document.querySelector('.max-num'),
	guessBtn = document.querySelector('#guess-btn'),
	guessInput = document.querySelector('#guess-input'),
	message = document.querySelector('.message');
	outOfRange = document.querySelector('.out-of-range');


// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e) {
	if(e.target.className === 'play-again') {
		window.location.reload();
	}
});

// Listen for guess
guessBtn.addEventListener('click', function() {
	let guess = parseInt(guessInput.value);

	// Validate input
	if (isNaN(guess) || guess < min || guess > max){
		setOutOfRangeMessage(`Please enter a number between ${min} and ${max}.`, 'red');
	};

	// Check if winning number guessed
	if (guess === winningNum) {
		gameOver(true, `You won! The correct number was ${winningNum}!`)
	}

	// Else: wrong number was guessed
	else {
		guessesLeft -= 1;
		if (guessesLeft === 0) {
			// Game over: loss
			gameOver(false, `Game over, you lost. The correct number was ${winningNum}.`)
		} else {
			// Game continues
			guessInput.value = '';
			setMessage(`Try again. You have ${guessesLeft} guesses remaining.`, 'black')

		}
	}
});

// Game over
function gameOver(won, msg) {
	let color;
	won === true ? color = 'green' : color = 'red';

	guessInput.disabled = true;
	guessInput.style.borderColor = color;
	setMessage(msg, color);

	// Play again
	guessBtn.value = "Play again";
	guessBtn.className += 'play-again';
}

// Get random winning number
function getRandomNum(min, max) {
	return Math.floor(Math.random()*(max - min + 1) + min);
};

// Set message
function setMessage(msg, color) {
	message.style.color = color;
	message.textContent = msg;
}

// Set out of range message
function setOutOfRangeMessage(msg, color) {
	outOfRange.style.color = color;
	outOfRange.textContent = msg,
	setTimeout(() => {
		outOfRange.textContent = '';
	}, 3000);
}