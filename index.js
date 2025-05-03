function getComputerChoice() {
  const comChoice = ["rock", "scissor", "paper"];
  const comIndex = Math.floor(Math.random() * comChoice.length);
  return comChoice[comIndex];
}

console.log(getComputerChoice());
