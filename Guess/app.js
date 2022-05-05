"use strict";
const body = document.querySelector("body");
let msg = document.querySelector(".message");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");
const numBox = document.querySelector(".number");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");

let secretNum = Math.floor(Math.random() * 20) + 1;
console.log(secretNum);

let highscore = 0;
let score = 20;

const displayMsg = text => {
	msg.textContent = text;
};

function again() {
	score = 20
	secretNum = Math.floor(Math.random() * 20) + 1;
	console.log(`new num ${secretNum}`);
	displayMsg("Start guessing...");
	scoreEl.textContent = score;
	numBox.textContent = "?";
	body.style.background = "black";
	document.querySelector(".guess").value = "";
}

function check() {
	const guessIn = Number(document.querySelector(".guess").value);
	if (!guessIn) {
		displayMsg("💥 No number 💥");
	} else if (guessIn === secretNum) {
		displayMsg("🌟🌟🌟 Correct Number!!!");
		numBox.textContent = secretNum;
		body.style.background = "#60b347";
		if (score > highscore) {
			highscore = score;
			highscoreEl.textContent = highscore;
		}
	} else if (Number(guessIn.value) !== secretNum) {
		if (score > 1) {
			displayMsg(
				guessIn > secretNum
					? "Your number is too big"
					: "Your number is too small"
			);
			score--;
			scoreEl.textContent = score;
		} else {
			displayMsg("You lost the game 💀💀💀");
			scoreEl.textContent = 0;
		}
	}
}

btnAgain.addEventListener("click", again);
btnCheck.addEventListener("click", check);
