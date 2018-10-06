const $_ = {
  boardState: {
    "0": 0,
    "1": 1,
    "2": 2,

    "3": 3,
    "4": 4,
    "5": 5,

    "6": 6,
    "7": 7,
    "8": 8,
  },
  currentPlayer: 'X',
  openingState: true,
}

// use this as a state factory >>>

function gameState(action, value) {
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

  this.pristineBoardState = function() {
    this.boardState = boardState;
    return this.boardState; // this worked when it was just 'boardState' -> need to test this now
  }

  this.playMove = function(space, player) {
    this.boardState[space] = player;
  }
  this.playMove.bind(this)
  this.pristineBoardState.bind(this)

  return this;
}

let getGameState = gameState;
let setGameState = gameState(action, value)