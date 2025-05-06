function getComputerChoice() {
  const computerItems = ["rock", "paper", "scissors"];
  const computerIndex = Math.floor(Math.random() * computerItems.length);
  return computerItems[computerIndex];
}

// console.log(getComputerChoice());

function getHumanChoice() {
  const getHumanPrompt = getComputerChoice(
    window.prompt("get window prompt", "")
  );
  return getHumanPrompt;
}

// console.log(getHumanChoice());

const humanScore = 0;
const computerScore = 0;

function playRound(humanChoice, computerChoice) {
  for (let i =1; i <= )
}
