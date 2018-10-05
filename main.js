let currentPlayer = 'X'
let $_openingState = true;

function displayOpeningBanner(openingState) {
  const helloMessage = document.getElementById("introduction");
  
  if (openingState) {
    helloMessage.innerText = ' ' 
    helloMessage.classList.toggle('fade');    
    setTimeout(() => { helloMessage.classList.toggle('disappear'); }, 501);
    $_openingState = false;
  } else {
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
  document.getElementById(element).textContent = currentPlayer;
  currentPlayer == 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
}