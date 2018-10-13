// outside file dependencies
const DOM = getDomComponent;
const $_ = globals;

// game play
function playGame() { renderState($_.openingState) };

function renderState(state) {
  if (state) {
    startScreenState()
  } else {
    restart()
  };
}

function startScreenState() {
  const helloMessage = DOM({name: 'introduction', getType: 'id'});

  helloMessage.innerText = ' '
  helloMessage.classList.toggle('fade');
  setTimeout(() => { helloMessage.classList.toggle('disappear'); }, 501);
  $_.openingState = false;
}

function restart() {
  const helloMessage = DOM({name: 'introduction', getType: 'id'});

  helloMessage.classList.remove("disappear")
  helloMessage.classList.toggle('fade');
  helloMessage.innerText = 'Can you beat the Matrix?'
  $_.openingState = true;
  clearBoard();
}

function clearBoard() {
  const gameSquares = DOM({name: 'game-square', getType: 'class'});

  for(i = 0; i < gameSquares.length; i++) {
      gameSquares[i].innerText = ' '
      gameSquares[i].classList.remove("player-o");
      gameSquares[i].classList.remove("player-x");
  }
};

function takeTurn(event, elementName) {
  this.playedOnSquare = DOM({name: elementName, getType: 'id'});
  this.empty = this.playedOnSquare.innerText == '';

  this.switchTurn = () => {
    this.playedOnSquare.textContent = $_.currentPlayer;
    this.playedOnSquare.className += ` player-${$_.currentPlayer.toLowerCase()}`;
    
    if ($_.currentPlayer == 'X') {
      // $_.boardState[elementName] = $_.currentPlayer
      $_.currentPlayer = 'O'
    } else {
      // $_.boardState[elementName] = $_.currentPlayer
      $_.currentPlayer = 'X';
    }
    console.log($_.boardState)
  }

  if (this.empty) { this.switchTurn(event, elementName) }
}