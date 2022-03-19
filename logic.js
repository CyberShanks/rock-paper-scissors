console.log("Connected");
console.log("Rock-Paper-Scissors");

function displayModal(e){
    logic(e.srcElement.id, computerPlay());
    const modal = document.querySelector('#modal-window');
    modal.classList.add('showModal');
    modal.classList.add('shadow');
}

//attaches eventlisteners to the BUTTONS when page loads
const buttNodes = document.querySelectorAll("button");
buttNodes.forEach((button) => {
    button.addEventListener('click', displayModal);
});

function hideModal(){
    const modal = document.querySelector('#modal-window');
    modal.classList.remove('showModal');
    modal.classList.remove('shadow');
}

//hides modal
const modalNode = document.querySelector('.main-modal');
modalNode.addEventListener('click', hideModal);

// proper random function which works in a range specified by min max
function properRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// computerPlay will generate either rock or paper or scissor
function computerPlay() {
    options = ['Rock', 'Paper', 'Scissors'];
    random = properRandom(0, 2);
    return options[random];
}

//modal Image and Text nodes
const playerChoiceNode = document.querySelector('#player-choice');
const computerChoiceNode = document.querySelector('#comp-choice');
const message = document.querySelector('#message');

// game logic coded here, make playerSelection inclusive of all cases
function logic(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    //player selects rock
    if (playerSelection == 'rock') {
        playerChoiceNode.setAttribute('src', 'img/fist_imp.png');
        if (computerSelection == 'Paper') {
            computerChoiceNode.setAttribute('src', 'img/paper_imp.png');
            loss();
            return -1;
        }
        else if (computerSelection == 'Rock') {
            computerChoiceNode.setAttribute('src', 'img/fist_imp.png');
            tie();
            return 0;
        }
        else {
            computerChoiceNode.setAttribute('src', 'img/scissors_imp.png');
            win();
            return 1;
        }
    }
    //player selects paper
    if (playerSelection == 'paper') {
        playerChoiceNode.setAttribute('src', 'img/paper_imp.png');
        if (computerSelection == 'Scissors') {
            computerChoiceNode.setAttribute('src', 'img/scissors_imp.png');
            loss();
            return -1;
        }
        else if (computerSelection == 'Paper') {
            computerChoiceNode.setAttribute('src', 'img/paper_imp.png');
            tie();
            return 0;
        }
        else {
            computerChoiceNode.setAttribute('src', 'img/fist_imp.png');
            win();
            return 1;
        }
    }
    //player selects scissors
    if (playerSelection == 'scissors') {
        playerChoiceNode.setAttribute('src', 'img/scissors_imp.png');
        if (computerSelection == 'Rock') {
            computerChoiceNode.setAttribute('src', 'img/fist_imp.png');
            loss();
            return -1;
        }
        else if (computerSelection == 'Scissors') {
            computerChoiceNode.setAttribute('src', 'img/scissors_imp.png');
            tie();
            return 0;
        }
        else {
            computerChoiceNode.setAttribute('src', 'img/paper_imp.png');
            win();
            return 1;
        }
    }
}

function win() {
    message.textContent = "You win!";
}

function tie() {
    message.textContent = "It's a Tie...";
}

function loss() {
    message.textContent = "You Lose!";
}
