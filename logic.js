console.log("Rock-Paper-Scissors");

// proper random function which works in a range specified by min max
function properRandom(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

// computerPlay will generate either rock or paper or scissor
function computerPlay() {
    options = ['Rock', 'Paper', 'Scissors'];
    random = properRandom(0,2);
    return options[random];
}

// game logic coded here, make playerSelection inclusive of all cases
function logic(playerSelection , computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
}

logic('RoCk', 'Papwer');
