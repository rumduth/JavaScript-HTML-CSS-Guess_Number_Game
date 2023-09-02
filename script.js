'use strict';

prompt("Who are you?")
let secret_number = Math.trunc(Math.random() * 20)

let maximum_highscore = 0;
let score = 20;
console.log(secret_number)
function reset_game()
{
    secret_number = Math.trunc(Math.random() * 20) + 1
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";
    document.querySelector('.check').textContent = "Check!"
    document.querySelector('.score').textContent = "20";
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = "Start guessing..."
    score = 20;


}

const checking_function = function()
{
    if(!document.querySelector('.guess').value)
    {
        document.querySelector('.message').textContent = "No enter number";
    }
    else
    {
    if(document.querySelector('.check').textContent === "New Game")
        reset_game();
    else if(document.querySelector('.message').textContent === "You lost the game 😭")
        reset_game();
    else
    {
    let guess = Number(document.querySelector('.guess').value);
    if(score < 10)
    {
        document.querySelector('.message').textContent = "You lost the game 😭";
        document.querySelector('.check').textContent = "Reset";
    }
    else
    {
    if(guess === secret_number)
    {
        document.querySelector('.message').textContent = "Correct Number 🙌";

        if(score > maximum_highscore)
            maximum_highscore = score;
        score = 20;
        document.querySelector('.highscore').textContent = String(maximum_highscore);
        document.querySelector('.number').textContent = String(guess);
        document.querySelector('.check').textContent = "New Game"
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'

    }
    else if(guess < secret_number)
    {
        document.querySelector('.message').textContent = "Too Low 😭"
        score--;
        document.querySelector('.score').textContent = String(score);
    }
    else
    {
        document.querySelector('.message').textContent = "Too High 😭"
        score--;
        document.querySelector('.score').textContent = String(score);
    }   
    }
    }}
}
document.querySelector('.check').addEventListener('click',checking_function)

document.querySelector('.again').addEventListener('click',reset_game);