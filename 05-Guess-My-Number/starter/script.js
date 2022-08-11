"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉Correct Number!🎉";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

const displayMessage = function(message) {
  document.querySelector(".message").textContent = message;
}

//define the secret number
let secretNumber = Math.trunc(Math.random() * 20);

//initial score
let score = 20;
let highScore = 0;

//log the value from the text box to the concole after click event
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //no input on click
  if (!guess) {
    displayMessage("No Number! 🔞");
  }

  //player wins
  else if (guess === secretNumber) {
    displayMessage("🎉Correct Number!🎉");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    //update high score
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      displayMessage(guess > secretNumber ? "📈Too high!" : "📉Too low!");
    } else {
      displayMessage("💥 You lost! 💥");
      document.querySelector("body").style.backgroundColor = "rgb(255,0,0)"
      document.querySelector(".number").textContent = secretNumber;
    }
  }
});

//restore default values and generate new secret number
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20);
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = ""; //! using .value instead of .textContent b/c .guess is a text box
  document.querySelector("body").style.backgroundColor = "#222";
});
