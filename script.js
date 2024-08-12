'use strict';

let playerScore = 0;
let computerScore = 0;
let result = "";

function getComputerChoice() {
    return ["Paper", "Rock", "Scissors"][Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    const choice = prompt("Rock, paper or scissors?").toLowerCase().trim();

    if (choice === "paper" || choice === "rock" || choice === "scissors")
        return choice[0].toUpperCase() + choice.slice(1);
    else {
        console.log("Please enter rock, paper, or scissors.");
        return getPlayerChoice();
    }
}

function playRound() {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice)
        console.log("It's a tie!");
    else {
        switch (playerChoice) {
            case "Paper":
                result = (computerChoice === "Rock") ?
                    `You win! ${playerChoice} beats ${computerChoice}` :
                    `You lose! ${computerChoice} beat ${playerChoice}`;
                console.log(result);
                break;
            case "Scissors":
                result = (computerChoice === "Paper") ?
                    `You win! ${playerChoice} beat ${computerChoice}` :
                    `You lose! ${computerChoice} beats ${playerChoice}`;
                console.log(result);
                break;
            case "Rock":
                result = (computerChoice === "Scissors") ?
                    `You win! ${playerChoice} beats ${computerChoice}` :
                    `You lose! ${computerChoice} beats ${playerChoice}`;
                console.log(result);
                break;
        }

        if (result.includes("win") == true)
            playerScore++;
        else //if (result.includes("lose") == true)
            computerScore++;
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
