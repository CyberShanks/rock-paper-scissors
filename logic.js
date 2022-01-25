console.log("Rock-Paper-Scissors");

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

// game logic coded here, make playerSelection inclusive of all cases
function logic(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == 'rock') {
        if (computerSelection == 'Paper'){
            loss(playerSelection, computerSelection);
            return -1;
        }    
        else if (computerSelection == 'Rock') {
            tie();
            return 0;
        }
        else {
            win(playerSelection, computerSelection);
            return 1;
        }
    }

    if (playerSelection == 'paper') {
        if (computerSelection == 'Scissors'){
            loss(playerSelection, computerSelection);
            return -1;
        }
        else if (computerSelection == 'Paper') {
            tie();
            return 0;
        }
        else {
            win(playerSelection, computerSelection);
            return 1;
        }
    }

    if (playerSelection == 'scissors') {
        if (computerSelection == 'Rock'){
            loss(playerSelection, computerSelection);
            return -1;
        }
        else if (computerSelection == 'Scissors') {
            tie();
            return 0;
        }
        else {
            win(playerSelection, computerSelection);
            return 1;
        }
    }
}

function win(player, computer) {
    player = player.charAt(0).toUpperCase() + player.slice(1).toLowerCase();
    console.log("You win! " + player + " beats " + computer);
}

function tie() {
    console.log("Tied! Both of you chose the same");
}

function loss(player, computer) {
    player = player.charAt(0).toUpperCase() + player.slice(1).toLowerCase();
    console.log("You Lose! " + computer + " beats " + player);
}

function game() {
    let playerWin = 0;
    let compWin = 0;
    while (playerWin < 5 && compWin < 5) {
        winCount = logic(prompt('Rock, Paper, Scissors?'), computerPlay());
        if (winCount == 1)
            playerWin++;
        else if (winCount == -1)
            compWin++;
    }
    if (playerWin == 5)
        alert("You WIN!!!!");
    else alert("You lose...");
}
game();
