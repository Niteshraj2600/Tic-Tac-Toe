currentTurn = "X";

function play(id) {
  var tac = "" + id;
  if (!document.getElementById(tac).innerText) {
    document.getElementById(tac).innerText = currentTurn;
    if (currentTurn == "O") {
      currentTurn = "X";
    } else {
      currentTurn = "O";
    }
  }
}
function reset() {
  gameOver = false;
  currentTurn = "X";
  for (var i = 1; i <= 9; i++) {
    document.getElementById("" + i).innerText = "";
  }
}
