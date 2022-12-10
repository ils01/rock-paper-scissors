function getComputerChoice(){
    let getRandomChoice = Math.floor((Math.random() * 3)) + 1;
    if(getRandomChoice === 1){
        return "rock";
    }
    else if(getRandomChoice === 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return `It's a tie! You both chose ${playerSelection}!`;
    }
    else if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            compWins++;
            return "You Lose! Paper beats Rock!";
        }else{
            userWins++;
            return "You Win! Rock beats Sissors!";
        }
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            userWins++;
            return `You Win! Paper beats Rock!`
        }
        else{
            compWins++;
            return `You Lose! Scissors cut Paper!`
        }
    }
    else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            compWins++;
            return `You Lose! Rock beats Scissors!`
        }
        else{
            userWins++;
            return `You Win! Scissors cut Paper!`
        }
    }
    else{
        return "Sorry! Wrong input... Must be Rock, Paper or Scissors!";
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Choose", "Rock/Paper/Scissors").toLocaleLowerCase();
        const computerSelection = getComputerChoice();
        console.log(`Your choice: ${playerSelection}`);
        console.log(`Computer choice: ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
        console.log(`=====================================`);
    }
    console.log("FINAL RESULT: ");
    if(userWins === compWins){
        console.log(`TIE!`);
    }
    else if(userWins < compWins){
        console.log(`YOU LOST!`)
    }
    else{
        console.log(`YOU WON!`)
    }
    console.log(`user: ${userWins}, computer: ${compWins}.`)
}

let userWins = 0;
let compWins = 0;

game();







