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
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return `{"You Win! ${playerSelection} beats ${computerSelection}"}`
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return `{"You Win! ${playerSelection} beats ${computerSelection}"}`
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return `{"You Win! ${playerSelection} beats ${computerSelection}"}`
    }
    else {
        return `{"You Lose! ${computerSelection} beats ${playerSelection}"}`
    }
}
let playerSelection = prompt('Please type from the following options: paper, rock, or scissors').toLowerCase();
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

