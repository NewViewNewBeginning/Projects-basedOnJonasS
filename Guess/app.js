"use strict";

let msg = document.querySelector(".message");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");
let numBox = document.querySelector(".number");
let score = document.querySelector(".score");
const highscore = document.querySelector(".higscore");


const secretNum = Math.floor(Math.random() * 20) + 1;
numBox.textContent = secretNum


function again() {
	msg.textContent = "Start guessing...";
	score.textContent = "20";
	guessInput.value = "";
	number.textContent = "?";
}
function check() {
	const guessIn = Number(document.querySelector(".guess").value);

	if (!guessIn) {
       
		msg.textContent = "💥 No number 💥";
	} else if (guessIn === secretNum){
        msg.textContent = '🌟🌟🌟 Correct Number!!!'
    }else if(guessIn>secretNum){
        msg.textContent = 'Your number is too big'
    }else{
        msg.textContent = "Your number is too small"
    }
}

btnAgain.addEventListener("click", again);
btnCheck.addEventListener("click", check);
