let playerScoreText = document.querySelector('#playerScore');
let computerScoreText = document.querySelector('#computerScore');
let playerScore = 0;
let computerScore = 0;
let centerText = document.querySelector('.center');
let isFinish = false;
//add event listener on left img(Player choice)
let playerSelections = document.querySelectorAll('.playerChoice');
playerSelections.forEach(element => {
    element.addEventListener('click', (e) => {
        //Call Playround function to judge
        if (!isFinish) {
            console.log(playRound(e.target.className, getComputerChoice()));
            changeScoreBoard();
        }
    });
});
function changeScoreBoard() {
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    if (playerScore >= 5) {
        isFinish = true;
        centerText.textContent = 'Player winner';
    }
    if (computerScore >= 5) {
        isFinish = true;
        centerText.textContent = 'Computer winner';
    }
}
//main function
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
//let playerScore = 0;
//let computerScore = 0;
// function game() {
//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt('Please type from the following options: paper, rock, or scissors').toLowerCase();
//         let computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));
//     }
//     if (playerScore > computerScore) console.log("Player win");
//     else if (playerScore < computerScore) console.log("Computer win");
//     else console.log("draw");
// }





