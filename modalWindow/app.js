"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpen = document.querySelectorAll(".show-modal");
const closeModalBtn = document.querySelector(".close-modal");

btnsOpen.forEach(function (btn) {
	btn.addEventListener("click", function () {
			overlay.classList.toggle("hidden");
			modal.classList.toggle("hidden");
		
	});
});
closeModalBtn.addEventListener("click", function () {
	overlay.classList.add("hidden");
	modal.classList.add("hidden");
});
