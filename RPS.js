const options = document.querySelectorAll('.far');
const score = document.querySelector('.score');
const playerPoints = document.querySelector('.playerScore');
const computerPoints = document.querySelector('.computerScore');
const roundResult = document.querySelector('.round');

let playerScore = 1;
let computerScore = 1;

function playRound(e) {
    let playerSelection = e.target.id;
    let computerSelection = computerPlay(choice);
    let winner = getWinner(playerSelection, computerSelection);
    scoreWinner(winner);

    if (winner === 'computer') {
        roundResult.textContent = "The computer won this round. Try again!";
    } else if (winner === 'player') {
        roundResult.textContent = "You won this round. Try again!";
    } else {
        roundResult.textContent = "It's a draw! Try again."
    }
    
    if (playerScore > 5) {
        alert('You won!');
        location.reload();
    } else if (computerScore > 5) {
        alert('You lost!');
        location.reload();
    }
}

// computer selection
function computerPlay(choice) {
    return choice[Math.floor(Math.random()*choice.length)];
}

let choice = ["rock", "paper", "scissors"];

//determine winner 
function getWinner(playerSelection, computerSelection) {
    if (computerSelection == "rock" && playerSelection == "scissors") {
        return 'computer';
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        return 'computer';
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        return 'computer';
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
       return 'player';
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        return 'player';
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        return 'player';
    } else {
        return 'draw';
    }
}

function scoreWinner(winner) {
    if(winner === 'player') {
        playerPoints.innerHTML = `Player: ${playerScore++}`;
    } else if (winner === 'computer') {
        computerPoints.innerHTML = `Computer: ${computerScore++}`;
    } else {
        return 0;
    }
}

function restart() {
    location.reload();
}

//player selection
options.forEach(far => far.addEventListener('click', playRound));

