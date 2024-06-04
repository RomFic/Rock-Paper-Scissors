'use strict';

let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0)
        return "rock"
    else if (choice === 1)
        return "paper"
    return "scissors"
}

function getHumanChoice() {
    let question = prompt("Rock, paper or scissors?");
    return question;
}

function playRound(humanChoice, computerChoice) {
    if (humanSelection === computerSelection)
        console.log("It’s a tie!");

    if (humanSelection === "scissors" && computerSelection === "rock") {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    }
    if (humanSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    }
    if (humanSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    }

    if (humanSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    }
    if (humanSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    }
    if (humanSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    }
}

playRound(humanSelection, computerSelection);

function playGame() {

}


