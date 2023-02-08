function getRandomChoice() {
    return (Math.random() * 3) + 1;
}
function getComputerChoice() {
    switch (getRandomChoice()) {
        case 1: return 'rock'
            break;
        case 2: return 'paper'
            break;
        case 3: return 'scissors'
    }
}
