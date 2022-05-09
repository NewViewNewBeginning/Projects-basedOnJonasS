"use strict";

const player = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const currScore = document.querySelector("#current--0");
const currScore1 = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
//BTNS
const newGameBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

//STARTING CONDITIONS
score.textContent = 0;
score1.textContent = 0;
diceEl.classList.add("hidden");
let currentScore = 0;
let totalScore = 0; // total score for player 0
let totalScore1 = 0; // total score for player 1
let playing = true; // state which after winnig changing to false for stopping possibilty to play

// Rolling dice and diplaying it
const rollDice = () => {
	if (playing) {
		const dice = Math.ceil(Math.random() * 6);
		diceEl.classList.remove("hidden");
		diceEl.setAttribute("src", `dice-${dice}.png`);

		if (dice !== 1) {
			if (player.classList.contains("player--active")) {
				currentScore += dice;
				currScore.textContent = currentScore;
			} else {
				currentScore += dice;
				currScore1.textContent = currentScore;
			}
		} else {
			switchingPlayers();
		}
	}
};

//Changing player when pressing hold btn and adding score to total
const holdGame = () => {
	if (playing) {
		if (player.classList.contains("player--active")) {
			totalScore += currentScore;
			score.textContent = totalScore;
		} else {
			totalScore1 += currentScore;
			score1.textContent = totalScore1;
		}
		switchingPlayers();
		showWin();
	}
};

//Adding class for active player
const switchingPlayers = () => {
	if (player.classList.contains("player--active")) {
		currentScore = 0;
		player1.classList.add("player--active");
		player.classList.remove("player--active");
	} else {
		currentScore = 0;
		player.classList.add("player--active");
		player1.classList.remove("player--active");
	}
};

//Changing layout for winning player
const showWin = () => {
	if (totalScore >= 100) {
		player.classList.add("player--winner");
		playing = false;
	}
	if (totalScore1 >= 100) {
		player1.classList.add("player--winner");
		playing = false;
	}
};

//Reseting function for all previous scores and movements
const newGame = () => {
	playing = true;
	currScore.textContent = 0;
	currScore1.textContent = 0;
	score.textContent = 0;
	score1.textContent = 0;
	totalScore = 0;
	totalScore1 = 0;
	player.classList.remove("player--winner");
	player1.classList.remove("player--winner");
};

newGameBtn.addEventListener("click", newGame);
rollBtn.addEventListener("click", rollDice);
holdBtn.addEventListener("click", holdGame);
