// outside file dependencies
const DOM = getDomComponent;
const $_ = gameState();

// game actions
function playGame() { 
  const introductionCard = DOM({name: 'introduction', getType: 'id'});
  const gameSquares = DOM({name: 'game-square', getType: 'class'});

  this.startScreenState = () => {
    introductionCard.innerText = ' '
    introductionCard.classList.toggle('fade');
    setTimeout(() => { introductionCard.classList.toggle('disappear'); }, 501);
    $_.openingState = false;
  }

  this.clearVisualBoard = () => {
    for(i = 0; i < gameSquares.length; i++) {
      gameSquares[i].innerText = ' '
      gameSquares[i].classList.remove("player-o");
      gameSquares[i].classList.remove("player-x");
    }
  };

  this.restart = () => {
    introductionCard.classList.remove("disappear")
    introductionCard.classList.toggle('fade');
    introductionCard.innerText = 'Can you beat the Matrix?'
  
    $_.openingState = true;
    $_.pristineBoardState();    
    this.clearVisualBoard();
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
