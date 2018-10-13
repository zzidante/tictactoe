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
    const isWin = this.checkForWin({player: currentPlayer})
    console.log(isWin)
    this.currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
    return this.boardState;
  };

  this.pristineBoardState = () => {
    /** Clears the board **/
    this.boardState = boardState;
    return this.boardState; // this worked when it was just 'boardState' -> need to test this now
  }

  this.checkForWin = ({player: p}) => {
    const bd = this.boardState;
    let win = false;
    const remainingEmptySpaces = []
    const combos = [
      [0,1,2], // horizontals
      [3,4,5],
      [6,7,8],
      [0,3,6], // verticals
      [1,4,7],
      [2,5,8],
      [0,4,8], // diagonals
      [6,4,2],
    ];

    for (i = 0; i < combos.length; i++) {
      if (bd[combos[i][0]] === p && 
          bd[combos[i][1]] === p && 
          bd[combos[i][2]] === p
        ) {
        win = true
        break;
      }
    }
    
    for (const idKey of Object.keys(this.boardState)) {
      if (!isNaN(this.boardState[idKey])) { remainingEmptySpaces.push(idKey) }
    }
    
    if (win) { return 100 }
    if (!win && remainingEmptySpaces.length === 0) { return 0 }
    else { return null}
  }

  this.updatePlayState.bind(this)
  this.pristineBoardState.bind(this)
  this.checkForWin.bind(this)

  return this;
}

// let getGameState = gameState;
// let setGameState = gameState(action, value)