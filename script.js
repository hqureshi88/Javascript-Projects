let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random() * 10);
}

function compareGuesses(currentHumanGuess, computerGuess, target) {

    if (currentHumanGuess > 9 || currentHumanGuess < 0) {
        alert('Number is out of range!');
    }
    
    let HumanPlayerValue = getAbsoluteDistance(target, currentHumanGuess)
    let computerPlayerValue = getAbsoluteDistance(target, computerGuess)

    if(HumanPlayerValue <= computerPlayerValue){
        return true;
    } else {
        return false;
    }
}

function getAbsoluteDistance(target, numberGuessed){
    return Math.abs(target-numberGuessed);
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