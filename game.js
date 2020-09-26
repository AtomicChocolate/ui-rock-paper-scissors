const results = document.getElementById("results");

const playerText = document.getElementById("plr-score");
const computerText = document.getElementById("cpu-score");

const buttons = document.querySelectorAll("input");

const choices = ["rock", "paper", "scissors"]; //The moves you and the computer can make.
let playerScore = 0
let computerScore = 0

function compareMoves(playerSelection, computerSelection) {
  switch(playerSelection) {
    case "0":
      return (computerSelection === 2);
    case "1":
      return (computerSelection === 0);
    case "2":
      return (computerSelection === 1);
  }
}

function playRound(playerSelection) {
  let computerSelection = Math.floor(Math.random() * 3);
  console.log(playerSelection, computerSelection);
  if (playerScore >= 5 || computerScore >= 5) {
    let winner = ((playerScore > computerScore) ? "Player" : "Computer") + " wins!";
    results.textContent = winner;
  } else {
    if (playerSelection == computerSelection) {
      results.textContent = `Tie! The computer also played ${choices[computerSelection]}.`
    } else {
      console.log(compareMoves(playerSelection, computerSelection))
      if (compareMoves(playerSelection, computerSelection) === true) {
        results.textContent = `Your ${choices[playerSelection]} beat the computer's ${choices[computerSelection]}!`;
        playerScore++;
        playerText.textContent = playerScore;
      } else {
        results.textContent = `The computer's ${choices[computerSelection]} beat your ${choices[playerSelection]}...`;
        computerScore++;
        computerText.textContent = computerScore;
      }
    }
  }

  if (playerScore >= 5 || computerScore >= 5) {
    let winner = ((playerScore > computerScore) ? "Player" : "Computer") + " wins!";
    results.textContent = winner;
  }
}

buttons.forEach(element => {
  element.addEventListener("click", () => {
    playRound(element.getAttribute("value"));
  });
});