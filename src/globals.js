// use this as a state factory >>>
function gameState(action, type) {
  const boardState = {
    "0": 0,
    "1": 1,
    "2": 2,

    "3": 3,
    "4": 4,
    "5": 5,

    "6": 6,
    "7": 7,
    "8": 8,
  };

  this.currentPlayer = 'X';
  this.openingState = true;
  this.boardState = Object.assign({}, boardState);

  this.updatePlayState = ({squareId: el, currentPlayer: currentPlayer}) => {
    /** Updates the global Board State and passes turn **/
    this.boardState[el] = currentPlayer;
    this.currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
    return this.boardState;
  };

  this.pristineBoardState = function() {
    this.boardState = boardState;
    return this.boardState; // this worked when it was just 'boardState' -> need to test this now
  }

  this.updatePlayState.bind(this)
  this.pristineBoardState.bind(this)

  return this;
}

// let getGameState = gameState;
// let setGameState = gameState(action, value)