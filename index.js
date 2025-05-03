function getComputerChoice() {
  const comChoice = ["rock", "scissor", "paper"];
  const comIndex = Math.floor(Math.random() * comChoice.length);
  return comChoice[comIndex];
}

// console.log(getComputerChoice());

function getHumanChoice() {
  const getChoice = Number(window.prompt("click to play", ""));
  return getChoice();
}
console.log(getHumanChoice());
