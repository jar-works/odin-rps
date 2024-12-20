let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    // Get random number
    let computerChoice = Math.floor(Math.random() * 3);

    let resultStr = "";

    // Conditional checks
    if (!choice) { // Return rock on 0
        resultStr = "rock";
    } else if (choice === 1) { // Return paper on 1
        resultStr = "paper";
    } else { // Return scissors on 2 (otherwise since 0 <= x <= 2)
        resultStr = "scissors";
    }

    console.log("Computer choice: " + resultStr);
};

let getHumanChoice = () => {
    // Get user input through browser window.
    // Convert string to int to later pass into choice reader
    let humanChoice = prompt("Enter rock, paper, or scissors");

    // Need to make user input lowercase for comparisons later
    let choiceLowercase = humanChoice.toLowerCase();
    console.log("Human choice: " + choiceLowercase);

    return choiceLowercase;
};


let playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) { // Draw

    }
};

playRound(getHumanChoice(), getComputerChoice());