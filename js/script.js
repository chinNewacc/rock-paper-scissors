let playerScoreText = document.querySelector('#playerScore');
let computerScoreText = document.querySelector('#computerScore');
let centerText = document.querySelector('.centerText');
let isFinish = false;

const body = document.querySelector('body');
let playerScore = 0;
let computerScore = 0;
let playerResult;

//add event listener on button
const restartButton = document.querySelector('button');
restartButton.addEventListener('click', restart);

//add event listener on left img(Player choice)
let playerSelections = Array.from(document.querySelectorAll('.playerChoice'));
let computerSelections = Array.from(document.querySelectorAll('.computerChoice'));
playerSelections.forEach(playerSelection => {
    playerSelection.addEventListener('click', (e) => {
        //Call Playround function to judge
        if (!isFinish) {
            let computerSelection = computerSelections[getComputerChoice()];
            console.log(playerSelection);
            console.log(e);
            console.log(playRound(e.target.className, computerSelection.firstChild.className));
            changeClickingSize(playerSelection, computerSelection);
            setTimeout(() => { changeClickingSize(playerSelection, computerSelection) }, 500);
            changeScoreBoard();
        }
    });
});


function changeClickingSize(playerSelection, computerSelection) {
    playerSelection.classList.toggle('clicking')
    computerSelection.classList.toggle('clicking')
}
function changeScoreBoard() {
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    if (playerScore >= 5 || computerScore >= 5) computeWhoWin();
}
function computeWhoWin() {
    isFinish = true;
    if (playerScore >= 5) {
        playerResult = 'win';
        centerText.textContent = 'Player win';
        changeBodyColor(playerResult);
        return;
    }
    if (computerScore >= 5) {
        playerResult = 'lose';
        centerText.textContent = 'Computer win';
        changeBodyColor(playerResult)
    }
}
function changeBodyColor(result) {
    body.classList.toggle(result);
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
        case 1: return 0//'rock'
        case 2: return 1//'paper'
        case 3: return 2//'scissors'
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        //playerScore++; computerScore++;
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
function restart() {
    playerScore = 0;
    computerScore = 0;
    changeScoreBoard();
    if (playerResult) changeBodyColor(playerResult);
    isFinish = false;
    playerResult = undefined;
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





