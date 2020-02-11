var player1 = false;
var player2 = false;
var player1Address = undefined;
var player2Address = undefined;
var player1Balance = undefined;
var player2Balance = undefined;

var playerOneSent = document.getElementById("playerOneSent")
var playerTwoSent = document.getElementById("playerTwoSent")

var playerOneForm = document.getElementById("P1Bet")
var playerOneSubmitButton = document.getElementById("playerOneBet")
var playerTwoForm = document.getElementById("P2Bet")
var playerTwoSubmitButton = document.getElementById("playerTwoBet")


async function playerOneSentEth(){
  player1Address = await TTTContract.methods.playerList(0).call({from:"0xBA4D1355bAD045CF0Cf17894D8122Bc33DB8Dd66"});
  if(typeof(player1Address) != "string"){
    document.getElementById("gameStatus").innerHTML = "P1, please try again!"
    console.log("P1 not yet sent!")
  } else {
    document.getElementById("gameStatus").innerHTML = "Player 2, please send ETH over to the game!"
    playerOneSent.style.display = "none"
    playerTwoSent.style.display = "block"
    console.log("P1 Sent!")

  }
}

async function playerTwoSentEth(){
  player2Address = await TTTContract.methods.playerList(1).call({from:"0xBA4D1355bAD045CF0Cf17894D8122Bc33DB8Dd66"});
  if(typeof(player2Address) != "string"){
    document.getElementById("gameStatus").innerHTML = "P2, please try again!"
    console.log("P2 not yet sent!")
  } else {
    document.getElementById("gameStatus").innerHTML = "Thank you! Players, please input your bets!"
    console.log("P2 Sent!")
    //Make
    playerTwoSent.style.display = "none"
    playerOneForm.style.display = "block"
    playerOneSubmitButton.style.display = "block"
    playerTwoForm.style.display = "block"
    playerTwoSubmitButton.style.display = "block"
  }
}





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
      document.getElementById("gameStatus").innerHTML = "The game has begun!"
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
      document.getElementById("gameStatus").innerHTML = "The game has begun!"
    }
  } else {
    document.getElementById("gameStatus").innerHTML = "Player 2, please input an integer value!"
    console.log(Number.isInteger("P2Bet"))
    console.log("P2Bet")
  }
}
