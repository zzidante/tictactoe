// outside file dependencies
const DOM = getDomComponent;
const $_ = gameState();

// game actions
function playGame() { 
  const helloMessage = DOM({name: 'introduction', getType: 'id'});
  const gameSquares = DOM({name: 'game-square', getType: 'class'});

  this.startScreenState = () => {
    helloMessage.innerText = ' '
    helloMessage.classList.toggle('fade');
    setTimeout(() => { helloMessage.classList.toggle('disappear'); }, 501);
    $_.openingState = false;
  }

  this.clearBoard = () => {
    for(i = 0; i < gameSquares.length; i++) {
      gameSquares[i].innerText = ' '
      gameSquares[i].classList.remove("player-o");
      gameSquares[i].classList.remove("player-x");
    }
  };

  this.restart = () => {
    helloMessage.classList.remove("disappear")
    helloMessage.classList.toggle('fade');
    helloMessage.innerText = 'Can you beat the Matrix?'
    $_.openingState = true;
    console.log($_.boardState)
    $_.pristineBoardState();
    console.log('clear')
    this.clearBoard();
    console.log($_.boardState)
  }

  this.renderState = (state) => {
    if (state) {
      this.startScreenState()
    } else {
      this.restart()
    };
  }

  this.renderState($_.openingState) 
};

function takeTurn(event, elementName) {
  const claimPendingSquare = DOM({name: elementName, getType: 'id'});

  this.placeClaimProceedTurn = () => {
    claimPendingSquare.textContent = $_.currentPlayer;
    claimPendingSquare.className += ` player-${$_.currentPlayer.toLowerCase()}`;
    $_.updatePlayState(
      { squareId: elementName, currentPlayer: $_.currentPlayer }
    )
  }

  if (claimPendingSquare.innerText == '') { this.placeClaimProceedTurn() }
}
