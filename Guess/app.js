"use strict";
const body = document.querySelector("body");
let msg = document.querySelector(".message");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");
let numBox = document.querySelector(".number");
let score = document.querySelector(".score");
let highscoreEl = document.querySelector(".highscore");
console.log(highscoreEl)

let secretNum = Math.floor(Math.random() * 20) + 1;
console.log(secretNum);
let highscore = 0;
let startingScore = 20;

const diplayMsg = (text) => {
	msg.textContent = text
}


function again() {
	secretNum = Math.floor(Math.random() * 20) + 1;
	console.log(`new num ${secretNum}`)
	diplayMsg("Start guessing...")
	score.textContent = "20";
	numBox.textContent = "?";
	body.style.background = "black";
	document.querySelector(".guess").value = "";
}
function check() {
	let guessIn = Number(document.querySelector(".guess").value);
	if (!guessIn) {
		msg.textContent = "💥 No number 💥";
	} else if (guessIn === secretNum) {
		diplayMsg("🌟🌟🌟 Correct Number!!!");
		numBox.textContent = secretNum;
		body.style.background = "#60b347";
		if (startingScore> highscore) {
			score = highscoreEl.textContent
			console.log(score, highscoreEl.textContent)
			
			
		}
	} else if (guessIn > secretNum) {
		if (startingScore > 1) {
			displayMsg("Your number is too big");
			startingScore--;
			score.textContent = startingScore;
		} else {
			msg.textContent = "You lost the game 💀💀💀";
			score.textContent = 0;
		}
	} else if (guessIn < secretNum) {
		if (startingScore > 1) {
			displayMsg("Your number is too small");
			startingScore--;
			score.textContent = startingScore;
		} else {
			displayMsg("You lost the game 💀💀💀");
			score.textContent = 0;
		}
	}
}

btnAgain.addEventListener("click", again);
btnCheck.addEventListener("click", check);
