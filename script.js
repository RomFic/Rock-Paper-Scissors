'use strict';

let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resetBtn = document.querySelector('#reset-btn');

const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");

const para = document.createElement("p");
const result = document.querySelector("#results");


function getComputerChoice() {
    return ["paper", "rock", "scissors"][Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        para.textContent = `It's a tie! Both chose ${playerChoice}.`;
        result.appendChild(para);
    }
    else if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")) {

        playerScore++;

        playerScoreSpan.textContent = playerScore;
        para.textContent = `You win! ${playerChoice} beats ${computerChoice}`;

        result.appendChild(para);
    }
    else {
        computerScore++;

        computerScoreSpan.textContent = computerScore;
        para.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;

        result.appendChild(para);
    }

    if (playerScore === 5 || computerScore === 5) {
        para.textContent = (playerScore === 5) ? `🎉You won the game! Congratulations!🎉` : `😭You lost the game... Try again😭`;

        resetBtn.style.display = "block";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }

    result.appendChild(para);
}


rock.addEventListener('click', () =>
    playRound('rock', getComputerChoice()));

paper.addEventListener('click', () =>
    playRound('paper', getComputerChoice()));

scissors.addEventListener('click', () =>
    playRound('scissors', getComputerChoice()));


resetBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.textContent = 0;
    computerScoreSpan.textContent = 0;
    para.innerText = "";
    resetBtn.style.display = "none";
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
});