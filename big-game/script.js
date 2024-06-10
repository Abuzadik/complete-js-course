"use strict";

//select the elements 
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const RollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold')
const btnNew = document.querySelector('.btn--new')
const current0El = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')


//initial starter 
const scores = [0, 0]
let activePlayer = 0;
let currentScore = 0;
score0El.textContent = 0
score1El.textContent = 0;
diceEl.classList.add('hidden')
let platying = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

//generate dice 
RollDice.addEventListener('click', function () {

  if (platying) {

    //generate rolling
    const generateDice = Math.trunc(Math.random() * 6) + 1;

    //display rolling
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${generateDice}.png`;

    // check if rolling is 1
    if (generateDice !== 1) {
      currentScore += generateDice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer()
    }
  }
})





btnHold.addEventListener('click', function () {
  if (platying) {
  //add current score 
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

  // winned 100 ? 
  if (scores[activePlayer] >= 10) {
    platying = false;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    document.querySelector(`.player--${activePlayer}`).classList.remove('active-player')
    document.querySelector(`#name--${activePlayer}`).classList.add('name')

  } else {
    //switch the player
    switchPlayer();
  }

  }



})