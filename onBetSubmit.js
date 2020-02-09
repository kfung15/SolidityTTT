var player1 = false;
var player2 = false;


function playerOneSubmit(){
  var p1betConfirm = Number(document.getElementById("P1Bet").value);
  if (Number.isInteger(p1betConfirm)) {
    document.getElementById("P1Bet").style.display = "none";
    document.getElementById("playerOneBet").style.display = "none";
    var p1default = "Player 1 has bet:"
    document.getElementById("p1bet").innerHTML = p1default.concat(p1betConfirm);
    document.getElementById("p1bet").style.display = "block";
    document.getElementById("gameStatus").innerHTML = "Hello! Please place your bets!"
    document.getElementById("p1betConfirm").innerHTML = "p1betted"
    player1 = true;
    console.log(player1)
    console.log(player2)
    if(player1 && player2){
      document.getElementById("gameStatus").innerHTML = "Please transfer ETH to the game!"
      waitForEthTransfer()
    }

  } else {
    document.getElementById("gameStatus").innerHTML = "Player 1, please input an integer value!"
    console.log(typeof(p1bet))
  }

}

function playerTwoSubmit(){
  var p2betConfirm = Number(document.getElementById("P2Bet").value);
  if (Number.isInteger(p2betConfirm)) {
    document.getElementById("P2Bet").style.display = "none";
    document.getElementById("playerTwoBet").style.display = "none";
    var p2default = "Player 2 has bet:"
    document.getElementById("p2bet").innerHTML = p2default.concat(p2betConfirm);
    document.getElementById("p2bet").style.display = "block";
    document.getElementById("gameStatus").innerHTML = "Hello! Please place your bets!"
    document.getElementById("p2betConfirm").innerHTML = "p2betted"
    console.log(document.getElementById("P2Bet").value)
    player2 = true;
    console.log(player1)
    console.log(player2)
    if(player1 && player2){
      document.getElementById("gameStatus").innerHTML = "Please transfer ETH to the game!"
      waitForEthTransfer()
    }
  } else {
    document.getElementById("gameStatus").innerHTML = "Player 2, please input an integer value!"
    console.log(Number.isInteger("P2Bet"))
    console.log("P2Bet")
  }
}

function waitForEthTransfer() {

}
