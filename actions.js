function playGame() {
  startGame($_.openingState);
};

function startGame(openingState) {
  if (openingState) {
    startScreen()
  } else {
    restart()
  };
}

function startScreen() {
  const helloMessage = document.getElementById("introduction");

  helloMessage.innerText = ' '
  helloMessage.classList.toggle('fade');
  setTimeout(() => { helloMessage.classList.toggle('disappear'); }, 501);
  $_.openingState = false;
}

function restart() {
  const helloMessage = document.getElementById("introduction");

  helloMessage.classList.remove("disappear")
  helloMessage.classList.toggle('fade');
  helloMessage.innerText = 'Can you beat the Matrix?'
  $_.openingState = true;
  clearBoard();
}

function clearBoard() {
  const gameSquares = document.getElementsByClassName("game-square");

  for(i = 0; i < gameSquares.length; i++) {
      gameSquares[i].innerText = ' '
  }
};

function takeTurn(event, elementName) {
  const playedOnSquare = document.getElementById(elementName)
  const empty = playedOnSquare.innerText == '';

  const switchTurn = function() {
    playedOnSquare.textContent = $_.currentPlayer;
    playedOnSquare.className += ` player-${$_.currentPlayer.toLowerCase()}`;
    console.log($_.boardState)

    if ($_.currentPlayer == 'X') {
      // $_.boardState[elementName] = $_.currentPlayer
      $_.currentPlayer = 'O'
    } else {
      // $_.boardState[elementName] = $_.currentPlayer
      $_.currentPlayer = 'X';
    }
  }

  if (empty) { switchTurn(event, elementName) }
}