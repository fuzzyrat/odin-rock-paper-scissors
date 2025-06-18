function getComputerChoice() {
    let randomValue = Math.floor(Math.random() * 3);
    let computerDecision = ""
    if (randomValue == 0) {
        computerDecision = "rock"
    }
    else if (randomValue == 1) {
        computerDecision = "paper"
    }
    else if (randomValue == 2) {
        computerDecision = "scissors"
    }
    return computerDecision
}

function getHumanChoice() {
    let humanDecision = prompt("Rock, paper, or scissors?");
    return humanDecision
}

let humanSelection = "";
let computerSelection = "";

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        console.log(`${humanSelection} vs ${computerSelection}`)
        if (humanChoice == "rock") {
            if (computerChoice == "rock") {
                console.log("Draw!")
            }
            else if (computerChoice == "paper") {
                console.log("You lose!")
                ++computerScore
            }
            else if (computerChoice == "scissors") {
                console.log("You win!")
                ++humanScore
            }
        }
        else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                console.log("You win!")
                ++humanScore
            }
            else if (computerChoice == "paper") {
                console.log("Draw!")
            }
            else if (computerChoice == "scissors") {
                console.log("You lose!")
                ++computerScore
            }
        }
        else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                console.log("You lose!")
                ++computerScore
            }
            else if (computerChoice == "paper") {
                console.log("You win!")
                ++humanScore    
                }
            else if (computerChoice == "scissors") {
                console.log("Draw!")

            }
        }
        console.log(`Your score: ${humanScore}; Their score: ${computerScore}`);
        }
    for (i = 1; i <= 5; i++) {  
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }
}

playGame();