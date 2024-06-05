'use strict';














































// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
// let humanScore;
// let computerScore;

// function getComputerChoice() {
//     let choice = Math.floor(Math.random() * 3);
//     if (choice === 0)
//         return "rock"
//     else if (choice === 1)
//         return "paper"
//     return "scissors"
// }

// function getHumanChoice() {
//     let choice = prompt("Rock, paper or scissors?");
//     return choice.toLowerCase();
// }


// function playRound(humanChoice, computerChoice) {
//     // if (humanChoice !== rock || paper || scissors)
//     //     console.log("Incorrect selection");

//     if (humanChoice === computerChoice)
//         console.log("It’s a tie!");

//     else if (humanChoice === "scissors" && computerChoice === "rock") {
//         console.log("You lose! Rock beats Scissors.");
//         computerScore++;
//     }
//     else if (humanChoice === "rock" && computerChoice === "paper") {
//         console.log("You lose! Paper beats Rock.");
//         computerScore++;
//     }
//     else if (humanChoice === "paper" && computerChoice === "scissors") {
//         console.log("You lose! Scissors beats Paper.");
//         computerScore++;
//     }

//     else if (humanChoice === "scissors" && computerChoice === "paper") {
//         console.log("You win! Scissors beats Paper.");
//         humanScore++;
//     }
//     else if (humanChoice === "rock" && computerChoice === "scissors") {
//         console.log("You win! Rock beats Scissors.");
//         humanScore++;
//     }
//     else if (humanChoice === "paper" && computerChoice === "rock") {
//         console.log("You win! Paper beats Rock.");
//         humanScore++;
//     }


// };


// function playGame() {
//     for (let i = 0; i <= 5; i++) {
//         playRound(humanSelection, computerSelection);

//     }


//     console.log(humanScore);
//     console.log(computerScore);
// }

// playGame()

// My approach was to use three functions:

// computerChoice(): Returns strings "rock" "paper" or "scissors". Uses the math random function to return a number between 0 and 100, and uses an if else statement to determine whether the number is <= 33 or <=66 or <= 100 to return the string

// playRound(): Which is basically the logic for one round of game. It takes user input and calls computerChoice() to determine the outcome with if else statements which it returns ("win" "lose" or "tie") A tip here: you have to write out just one outcome (either "win" or loose") with all possible cases, than you can do if else playerChoice == computerChoice => "tie", and an else for all other outcomes.

// playGame(): A for loop, which Calls the playRound() function 5 times and increments a variable outside the for loop (for example "timesWon") by one every time that outcome of playRound() occurs. Than with an if statement on the variable (like if "timesWon >= 3) you can determine the outcome and log it.

