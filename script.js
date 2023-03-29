'use strict';

let num = Math.floor(Math.random() * 20) + 1;
console.log(num);
let chances = 20;
let highScore = 0;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
    let userGuess = Number(document.querySelector('.guess').value);

    if (!userGuess) {
        document.querySelector('.message').textContent = '⛔ No guess';
    }
    else if (userGuess === num) {
        document.querySelector('.number').textContent = num;
        document.querySelector('.number').style.width = '30rem';
        (document.querySelector('.message')).textContent = "🎉 Guess Correctly";
        document.querySelector('body').style.backgroundColor = 'green';
        chances--;
        
        if (chances >= highScore) {
            highScore = chances;
            document.querySelector('.highscore').textContent = highScore+1;
        }
        document.querySelector('.score').textContent = score;
        document.querySelector('.chances').textContent = chances;
    }
    else if (userGuess > num) {
        if (chances > 0) {
            score--;
            document.querySelector('.message').textContent = "📈 Too High";
            let sc = --chances;
            document.querySelector('.chances').textContent = sc;
        }
        else {
            document.querySelector('.message').textContent = "You lose";
        }
    }
    else if (userGuess < num) {
        if (chances > 0) {
            score--;
            document.querySelector('.message').textContent = "📉 Too Low";
            let sc = --chances;
            document.querySelector('.chances').textContent = sc;
        }
        else {
            document.querySelector('.message').textContent = "You lose";
        }
    }
});

//for the reset button 
document.querySelector('.again').addEventListener('click', function () {
    chances = 20;
    num = Math.floor(Math.random() * 20) + 1;
    console.log(num);
    document.querySelector('.chances').textContent = '20';
    document.querySelector('.score').textContent = '0';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';

})