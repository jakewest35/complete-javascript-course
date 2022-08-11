"use strict";

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

//add event listeners to show all modal windows
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", showModal);

//close modal windows by selecting "x", clicking outside of window,
//or pressing the ESC key
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  //if escape key is pressed and modal is shown, close the modal window
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
