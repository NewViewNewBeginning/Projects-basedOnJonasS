"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpen = document.querySelectorAll(".show-modal");
const closeModalBtn = document.querySelector(".close-modal");

const closeModal = e => {
	overlay.classList.add("hidden");
	modal.classList.add("hidden");
};

// Opening modal with click on any from 3 bns
btnsOpen.forEach(function (btn) {
	btn.addEventListener("click", function () {
		overlay.classList.toggle("hidden");
		modal.classList.toggle("hidden");
	});
});
//Closing mod
overlay.addEventListener("click", closeModal);
closeModalBtn.addEventListener("click", closeModal);

document.onkeydown = function (e) {
	e = e || window.event;
	if (e.keyCode == 27 && !modal.classList.contains('hidden')) {
		closeModal();
	}
};

// Alt ver for closing modal with ESC btn
// document.addEventListener("keyup", function (e) {
// 	if (e.key === "Escape" && !modal.classList.contains('hidden') ) {
// 		closeModal();
// 	}
// });
