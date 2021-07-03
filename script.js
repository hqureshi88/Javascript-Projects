let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random() * 10);
}

function compareGuesses(currentHumanGuess, computerGuess, target) {
    let HumanPlayerValue = Math.abs(target-currentHumanGuess);
    let computerPlayerValue = Math.abs(target-computerGuess);

    if(HumanPlayerValue <= computerPlayerValue){
        return true;
    } else {
        return false;
    }
}

function updateScore(winner){
    if (winner == 'human') {
        humanScore += 1;
    } else {
        computerScore +=1;
    }
    return;
}

function advanceRound(){
    currentRoundNumber +=1;
    return;
}