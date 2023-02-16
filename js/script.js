function getRandomChoice() {
    return Math.floor((Math.random() * 3) + 1);
}
function getComputerChoice() {
    return getResult(getRandomChoice());
}
function getResult(choice) {
    switch (choice) {
        case 1: return 'rock'
            break;
        case 2: return 'paper'
            break;
        case 3: return 'scissors'
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        playerScore++; computerScore++;
        return "Draw";
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return `{"You Win! ${playerSelection} beats ${computerSelection}"}`

    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return `{"You Win! ${playerSelection} beats ${computerSelection}"}`
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return `{"You Win! ${playerSelection} beats ${computerSelection}"}`

    }
    else {
        computerScore++;
        return `{"You Lose! ${computerSelection} beats ${playerSelection}"}`
    }
}
let playerScore = 0;
let computerScore = 0;
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Please type from the following options: paper, rock, or scissors').toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) console.log("Player win");
    else if (playerScore < computerScore) console.log("Computer win");
    else console.log("draw");
}





