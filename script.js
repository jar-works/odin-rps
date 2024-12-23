// NOTE: Using arrow functions to get more used to them.

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

    // console.log("Computer choice: " + resultStr);

    return resultStr;
};

let getHumanChoice = () => {
    // Get user input through browser window.
    let humanChoice = prompt("Enter rock, paper, or scissors");

    // Need to make user input lowercase for comparisons later
    let choiceLowercase = humanChoice.toLowerCase();
    // console.log("Human choice: " + choiceLowercase);

    return choiceLowercase;
};

let humanScore = 0;
let computerScore = 0;

let playGame = (humanButtonChoice) => {

    let playRound = (humanChoice, computerChoice) => {
        if (humanChoice === computerChoice) {
            draw(humanChoice, computerChoice);
        } else if (
            humanChoice === "paper" && computerChoice === "rock" || 
            humanChoice === "rock" && computerChoice === "scissors" || 
            humanChoice === "scissors" && computerChoice === "paper"
        ) {
            humanWinsTheRound(true);
        } else {
            humanWinsTheRound(false);
        }

        updateChoices(humanChoice, computerChoice);
    };

    playRound(humanButtonChoice, getComputerChoice());

    // Computer or player reaches 5 rounds
    if (humanScore >= 5) {
        humanWinsTheGame(true);
    } else if (computerScore >= 5) {
        humanWinsTheGame(false);
    }
};

const btnsMenu = document.querySelector("#menu");

btnsMenu.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
        case "rock":
            playGame("rock");
            break;
        case "paper":
            playGame("paper");
            break;
        case "scissors":
            playGame("scissors");
            break;
    }
});

const humanScoreText = document.querySelector("#human-score");
const computerScoreText = document.querySelector("#computer-score");
const statusText = document.querySelector("#status");

function humanWinsTheRound(isHumanWinner) {
    if (isHumanWinner) {
        humanScore++;
        humanScoreText.textContent = humanScore;
        statusText.textContent = "You win the round!";
    } else {
        computerScore++;
        computerScoreText.textContent = computerScore;
        statusText.textContent = "You lose the round!";
    }
}

function draw() {
    statusText.textContent = "DRAW! No winners this round.";
}

const humanChoiceText = document.querySelector("#human-choice");
const computerChoiceText = document.querySelector("#computer-choice");

function updateChoices(humanChoice, computerChoice) {
    humanChoiceText.textContent = humanChoice.toUpperCase();
    computerChoiceText.textContent = computerChoice.toUpperCase();
}

const restartGameBtn = document.querySelector("#restart");

function humanWinsTheGame(isHumanWinner) {
    if (isHumanWinner) {
        statusText.textContent = "YOU WIN THE GAME! YOU HAVE REACHED 5 WINS.";
    } else {
        statusText.textContent = "YOU LOSE THE GAME! COMPUTER HAS REACHED 5 WINS.";
    }

    restartGameBtn.style.display = "block";
    btnsMenu.style.display = "none";
}

restartGameBtn.addEventListener("click", cleanUpGame);

function cleanUpGame() {
    restartGameBtn.style.display = "none";
    btnsMenu.style.display = "block";
    statusText.textContent = "";

    humanChoiceText.textContent = "NONE";
    humanScoreText.textContent = "0";
    humanScore = 0;

    computerChoiceText.textContent = "NONE";
    computerScoreText.textContent = "0";
    computerScore= 0;
}