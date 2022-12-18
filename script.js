let userWins = 0;
let compWins = 0;

const score = document.createElement('p');
score.innerText = `You: ${userWins}, AI: ${compWins}`;
document.body.appendChild(score);

const result = document.createElement('div');
document.body.appendChild(result);

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(){
        if(userWins !== 5 && compWins !== 5){
            const playerSelection = button.innerText.toLowerCase();
            const computerSelection = getComputerChoice();

            result.innerText = `You: ${playerSelection}\nComputer: ${computerSelection}\n${playRound(playerSelection, computerSelection)}\n`;
            score.innerText = `You: ${userWins}, AI: ${compWins}`;

            if(userWins === 5 || compWins === 5){
                let finalRes;
                if(userWins < compWins) finalRes = 'You Lost!';
                else finalRes = 'You Won!'
                score.innerText += `\nFINAL RESULT: ${finalRes}`;
            }
        } 
    })
})  

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