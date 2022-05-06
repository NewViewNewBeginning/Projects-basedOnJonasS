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

// Rolling dice and diplaying it

const rollDice = () => {
	const dice = Math.ceil(Math.random() * 6);
	console.log(dice);
	diceEl.classList.remove("hidden");
	diceEl.setAttribute("src", `dice-${dice}.png`);
    
	if (dice !== 1) {
        if(player.classList.contains('player--active')){
            currentScore += score
            currScore.textContent = currentScore
        }else{
            currentScore += score
            currScore1.textContent = currentScore
        }
        
	} else {
		switchingPlayers();
	}
};

const switchingPlayers = () => {
	if (player.classList.contains("player--active")) {
		player1.classList.add("player--active");
		player.classList.remove("player--active");
	} else {
		player.classList.add("player--active");
		player1.classList.remove("player--active");
	}
};

const newGame = () => {
	currScore.textContent = 0;
	currScore1.textContent = 0;
	score.textContent = 0;
	score1.textContent = 0;

};

const holdGame = () => {
	switchingPlayers();
};

newGameBtn.addEventListener("click", newGame);
rollBtn.addEventListener("click", rollDice);
holdBtn.addEventListener("click", holdGame);
