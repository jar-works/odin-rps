let getComputerChoice = () => {
    // Get random number
    let randomNum = Math.floor(Math.random() * 3);

    // Conditional checks
    if (!randomNum) { // Return rock on 0
        return "rock";
    } else if (randomNum === 1) { // Return paper on 1
        return "paper";
    } else { // Return scissors on 2 (otherwise since 0 <= x <= 2)
        return "scissors";
    }
};