"use strict";
const body = document.querySelector("body");
let msg = document.querySelector(".message");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");
let numBox = document.querySelector(".number");
let score = document.querySelector(".score");
const highscore = document.querySelector(".higscore");

const secretNum = Math.floor(Math.random() * 20) + 1;
console.log(secretNum);

let startingScore = 20;

function again() {
	msg.textContent = "Start guessing...";
	score.textContent = "20";
	numBox.textContent = "?";
}
function check() {
	let guessIn = Number(document.querySelector(".guess").value);

	if (!guessIn) {
		msg.textContent = "💥 No number 💥";
	} else if (guessIn === secretNum) {
		msg.textContent = "🌟🌟🌟 Correct Number!!!";
		numBox.textContent = secretNum;
		body.style.background = "#60b347";
	} else if (guessIn > secretNum) {
		if (startingScore > 1) {
			msg.textContent = "Your number is too big";
			startingScore--;
			score.textContent = startingScore;
		} else {
			msg.textContent = "You lost the game 💀💀💀";
			score.textContent = 0;
		}
	} else if (guessIn < secretNum) {
		if (startingScore > 1) {
			msg.textContent = "Your number is too small";
			startingScore--;
			score.textContent = startingScore;
		} else {
			msg.textContent = "You lost the game 💀💀💀";
			score.textContent = 0;
		}
	}
}

btnAgain.addEventListener("click", again);
btnCheck.addEventListener("click", check);
