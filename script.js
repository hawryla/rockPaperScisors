//Function generating AI Choice
function computerPlay(){
    let aiChoiceGenerator = Math.floor(Math.random()*3);
    let aiChoice;
    switch(aiChoiceGenerator){
        case 0:
            aiChoice ='rock';
        break;
        case 1:
            aiChoice ='paper';
        break;
        case 2:
            aiChoice ='scissors';
        break;
    }
    return aiChoice;
}
//Function generating Player Choice
function playerPlay(){
    let playerChoice = prompt('Choose rock, scissors or paper').toLowerCase();
    return playerChoice;
}


function singleRound(playerSelection,computerSelection){
    let result;
    if(playerSelection == computerSelection){
        result = 'It is a tie';
    }else if(playerSelection =='rock' && computerSelection =='scissors'){
        result = 'Player wins! Rock beats scissors';
    }else if(playerSelection== 'scissors'&& computerSelection=='paper'){
        result='Player wins! Scissors beats paper';
    }else if(playerSelection =='paper' && computerSelection=='rock'){
        result = 'Player wins! Paper beats rock';
    }else{
        switch(computerSelection){
            case 'rock':
                result='Computer wins! Rock beats scissors';
            break;
            case 'scissors':
                result = 'Computer wins! Scissors beats paper';
            break;
            case 'paper':
                result= 'Computer wins! Paper beats rock';
            break;
        }
    }
    return result;
}

let playerScore = 0;
let aiScore = 0;
function game(){
    
    while(playerScore<=5 && aiScore<=5){
        let roundResult = singleRound(playerPlay(),computerPlay());
        if(roundResult.includes('Player wins')){
            playerScore++;
            console.log(roundResult);
        }else if(roundResult.includes('Computer wins')){
            console.log(roundResult);
            aiScore++;
        }else{
            console.log(roundResult);
        }
        console.log(`Wynik gracza: ${playerScore} Wynik komputera: ${aiScore}`);
        if(playerScore==5){
            console.log('Gracz wygrywa');
            return;
        }else if(aiScore==5){
            console.log('Komputer wygrywa');
            return;
        }
    }
    
}