let getComputerChoice = () => {
    // Get random number
    let computerChoice = Math.floor(Math.random() * 3);
    console.log("Computer choice: " + readChoice(computerChoice));
};

let getHumanChoice = () => {
    // Get user input through browser window.
    // Convert string to int to later pass into choice reader
    let humanChoice = parseInt(prompt("Enter number to choose rock [0], paper [1], or scissors [2]"));
    console.log("Human choice: " + readChoice(humanChoice));
};

let readChoice = (choice) => {
    // Conditional checks
    if (!choice) { // Return rock on 0
        return "rock";
    } else if (choice === 1) { // Return paper on 1
        return "paper";
    } else { // Return scissors on 2 (otherwise since 0 <= x <= 2)
        return "scissors";
    }
}

getComputerChoice();
getHumanChoice();