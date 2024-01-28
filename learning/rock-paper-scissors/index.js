const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";
    const win = "YOU WIN!";
    const loss = "YOU LOSE!";
    const tie = "IT'S A TIE";

    if (playerChoice === computerChoice) {
        result = tie;
    } else {
        switch(playerChoice) {
            case "rock":
                result = ((computerChoice === "scissors") ? win : loss);
                break;
            case "scissors":
                result = ((computerChoice === "paper") ? win : loss);
                break;
            case "paper":
                result = ((computerChoice === "rock") ? win : loss);
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = `${result}`;

    resultDisplay.classList.remove("greenText", "redText", "yellowText");

    switch(result) {
        case win:
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case loss:
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case tie:
            resultDisplay.classList.add("yellowText");
            break;
    }
}
