"use strict";
const body = document.querySelector("body");
let msg = document.querySelector(".message");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");
let numBox = document.querySelector(".number");
let score = parseFloat(document.querySelector(".score"));
const highscore = document.querySelector(".higscore");

const secretNum = Math.floor(Math.random() * 20) + 1;
console.log(secretNum);



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
		msg.textContent = "Your number is too big";
      
	} else {
		msg.textContent = "Your number is too small";
	}}
    




btnAgain.addEventListener("click", again);
btnCheck.addEventListener("click", check);
