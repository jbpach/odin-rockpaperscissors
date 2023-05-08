function getComputerChoice() {
    const index = Math.floor(Math.random() * 3);
    const options = ["rock", "paper", "scissors"];
    return options[index];
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Scissors?")
    return playerChoice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lost! Paper beats Rock");
        return 0;
    } else if(playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lost! Scissors beats Paper");
        return 0;
    } else if(playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lost! Rock beats Scissors");
        return 0;
    } else if(playerSelection == "paper" && computerSelection == "rock") {
        console.log("You won! Paper beats Rock");
        return 1;
    } else if(playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You won! scissors beats Paper");
        return 1;
    } else if(playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You won! Rock beats Scissors");
        return 1;
    } else {
        console.log("It's a tie");
        return 3;
    }
}

function game() {
    let playerScore = 0;
    let compScore = 0;
    for(let i = 0; i <= 5; i++) {
        const response = playRound(getPlayerChoice(), getComputerChoice());
        if (response == 1) {
            playerScore++;
        } else if (response == 0) {
            compScore++;
        }
    }
    console.log("Final Score: ")
    console.log(`You:  ${playerScore} Computer: ${compScore}`)
    if (playerScore > compScore) {
        console.log("You won the game!");
    } else if (compScore > playerScore) {
        console.log("You lost the game!");
    } else {
        console.log("Its a tie!");
    }
}

game();