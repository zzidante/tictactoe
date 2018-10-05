const $_pristineBoardState = {
  zero: 0,
  one: 1,
  two: 2,

  three: 3,
  four: 4,
  five: 5,

  six: 6,
  seven: 7,
  eight: 8,
}

let $_currentPlayer = 'X'
let $_openingState = true;
let $_boardState

function displayOpeningBanner(openingState) {
  const helloMessage = document.getElementById("introduction");
  const gameSquares = document.getElementsByClassName("game-square");
  
  if (openingState) {
    helloMessage.innerText = ' ' 
    helloMessage.classList.toggle('fade');    
    setTimeout(() => { helloMessage.classList.toggle('disappear'); }, 501);
    $_openingState = false;
  } else {
    for(i = 0; i < gameSquares.length; i++) {
      gameSquares[i].innerText = ' '
    } // make this a method

    helloMessage.classList.remove("disappear")
    helloMessage.classList.toggle('fade');   
    helloMessage.innerText = 'Can you beat the Matrix?' 
    $_openingState = true;
  };
}

function playGame() {
  displayOpeningBanner($_openingState);
};

function takeTurn(element) {
  document.getElementById(element).textContent = $_currentPlayer;
  $_currentPlayer == 'X' ? $_currentPlayer = 'O' : $_currentPlayer = 'X';
}