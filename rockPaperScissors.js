const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === `rock` || userInput === `scissors` || userInput === `paper`) {
    return userInput;
  } else {
    console.log(`This is not a valid selection`)
  }
} 


function getComputerChoice() {
  let rng = Math.floor(Math.random() * 3);
  if (rng === 0) {
    return `rock`
  } else if (rng === 1) {
    return `paper`
  } else if (rng === 2) {
    return `scissors`
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "The game was a tie";
  } else if (userChoice === `rock`) {
    if (computerChoice === `paper`) {
      return "Computer Won!"
    } else {
      return "Human Won!"
    }
  } else if ( userChoice  === `scissors`) {
    if (computerChoice === `rock`) {
      return "Computer Won!"
    } else {
      return "Human Won!"
    }
  }
}

function playGame() {
  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice();
  console.log(userChoice)
  console.log(computerChoice);
}

getUserChoice("Rock")
getComputerChoice("Scissors")

console.log(playGame());


