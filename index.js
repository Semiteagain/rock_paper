function getComputerChoice() {
  const computerItems = ["rock", "paper", "scissors"];
  const computerIndex = Math.floor(Math.random() * computerItems.length);
  return computerItems[computerIndex];
}

// console.log(getComputerChoice());

function getHumanChoice() {
  const humanChoicePrompt = prompt("Enter Rock, Paper, or Scissors:");
  if (!humanChoicePrompt) return null;

  const validHumanChoicePrompt = ["rock", "paper", "scissors"];

  while (!validHumanChoicePrompt.includes(humanChoicePrompt)) {
    humanChoicePrompt = prompt(
      "invalid input. please enter Rock, Paper, or Scissors:"
    );
    if (!humanChoicePrompt) return null;
    humanChoicePrompt = humanChoicePrompt.toLowerCase();
  }
  return humanChoicePrompt;
}
// console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  // convert to lower case
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  // check for tie
  if (humanChoice === computerChoice) {
    return `Its a tie! You both chose ${humanChoice}`;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "rock" && computerChoice === "paper")
  ) {
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

console.log(`Human: ${humanChoice}`);
console.log(`Computer: ${computerChoice}`);
console.log(playRound(humanChoice, computerChoice));

function playGame() {
  const humanScore = 0;
  const computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const humanChoice = getHumanChoice();
    if (!humanChoice) {
      console.log("Game cancelled by the player");
      return;
    }
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    console.log(`Round ${round}`);
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    console.log(result);

    // update Score
    if (result.startsWith("You win")) {
      humanScore++;
    } else if (result.startsWith("You lose")) {
      computerScore++;
    }

    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    console.log("---------------------------------");
  }

  // Final Result
  if (humanScore > computerScore) {
    console.log("You won the game! Congratulations!");
  } else if (humanScore < computerScore) {
    console.log("You lost the game. Better luck next time");
  } else {
    ("it's a tie game!");
  }
}

console.log(playGame());
