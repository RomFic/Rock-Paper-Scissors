'use strict';

const paper = "Paper";
const rock = "Rock";
const scissors = "Scissors";

let playerScore = 0;
let computerScore = 0;
let result = "";

function getComputerChoice() {
    return [rock, paper, scissors][Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    const choice = prompt(`${rock}, ${paper} or ${scissors}?`).toLowerCase().trim();
    return choice[0].toUpperCase() + choice.slice(1);
}

function playRound() {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice)
        console.log("It's a tie!");
    else {
        switch (playerChoice) {
            case paper:
                result = (computerChoice === rock) ? `You win! ${playerChoice} beats ${computerChoice}` : `You lose! ${computerChoice} beat ${playerChoice}`;
                console.log(result);
                break;
            case scissors:
                result = (computerChoice === paper) ? `You win! ${playerChoice} beat ${computerChoice}` : `You lose! ${computerChoice} beats ${playerChoice}`;
                console.log(result);
                break;
            case rock:
                result = (computerChoice === scissors) ? `You win! ${playerChoice} beats ${computerChoice}` : `You lose! ${computerChoice} beats ${playerChoice}`;
                console.log(result);
                break;
        }

        if (result.includes("win") == true)
            playerScore++;
        else computerScore++;
    };
}

function playGame() {

    for (let i = 0; i < 5; i++) {
        playRound();
    };

    if (playerScore > computerScore)
        console.log(`${playerScore}-${computerScore} Yes! You won the game!`);
    else if (playerScore < computerScore)
        console.log(`${playerScore}-${computerScore} Oh no... You lost the game...`);
    else console.log(`${playerScore}-${computerScore} Tie game! Play again!`);

}

playGame();



