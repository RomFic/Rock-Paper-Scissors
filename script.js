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
}

playRound(humanSelection, computerSelection);



