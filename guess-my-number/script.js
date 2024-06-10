"use strict";

//generate random number ]
const secretNumber = Math.trunc(Math.random() * 21);
let score = 20;
let hightscoew = 0;

document.querySelector(".check").addEventListener("click", function () {
const guess = Number(document.querySelector(".guess").value);

  //not a number
  if (!guess) {
    document.querySelector(".message").textContent = "Not a number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct a number";
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    
    if(score > hightscoew){
      hightscoew = score;
      document.querySelector('.highscore').textContent = hightscoew;
    }
    
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "its too hight";
      score--;
      document.querySelector(".score").textContent = score;

    } else {
      document.querySelector(".message").textContent = "You Lost";
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "its too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost";
    }

    
  }
});




document.querySelector('.again').addEventListener('click', function(){
   score = 20
   document.querySelector('.guess').value = '';
   document.querySelector('.score').textContent = score;
   document.querySelector('.number').textContent =  '?';
   document.querySelector('.message').textContent = 'start guessing....'
   document.querySelector('body').style.backgroundColor = 'black';
   document.querySelector('.number').style.width = '15rem';

   
})




