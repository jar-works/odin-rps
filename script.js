let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    // Get random number
    let computerChoice = Math.floor(Math.random() * 3);

    let resultStr = "";

    // Conditional checks
    if (!computerChoice) { // Return rock on 0
        resultStr = "rock";
    } else if (computerChoice === 1) { // Return paper on 1
        resultStr = "paper";
    } else { // Return scissors on 2 (otherwise since 0 <= x <= 2)
        resultStr = "scissors";
    }

    console.log("Computer choice: " + resultStr);

    return resultStr;
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
        console.log(outputStr = "DRAW! " + humanChoice + " cannot beat or lose to " + computerChoice + ".");
    } else if (humanChoice === "paper" && computerChoice === "rock" || 
        humanChoice === "rock" && computerChoice === "scissors" || 
        humanChoice === "scissors" && computerChoice === "paper") { // Player wins

        console.log(outputStr = "You win! " + humanChoice + " beats " + computerChoice + ".");
        humanScore++;
    } else { // Computer wins
        console.log(outputStr = "You lose! " + computerChoice + " beats " + humanChoice + ".");
        computerScore++;
    }
};

let playGame = () => {

};


playRound(getHumanChoice(), getComputerChoice());