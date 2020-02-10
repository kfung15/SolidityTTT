var player1 = false;
var player2 = false;
var player1Address = undefined;
var player2Address = undefined;
var player1Balance = undefined;
var player2Balance = undefined;


var player1AddressEntered = false;
var player2AddressEntered = false;


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
      document.getElementById("gameStatus").innerHTML = "Player 1, please transfer ETH to the game!"
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
      document.getElementById("gameStatus").innerHTML = "Player 1, please transfer ETH to the game!"
      waitForEthTransfer()
    }
  } else {
    document.getElementById("gameStatus").innerHTML = "Player 2, please input an integer value!"
    console.log(Number.isInteger("P2Bet"))
    console.log("P2Bet")
  }
}

function sleep(ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForEthTransfer() {
  var player1AddressPromise = new Promise(function(resolve,reject){
    player1Address = TTTContract.methods.playerList(0).call({from:'0x40a21e04563c7955fDBDC1b43138354352204Cc5'}).then(player1AddressEntered = true,player1AddressEntered = false)
  });
  while(player1AddressEntered == false){

  //Call the contract to check for players depositing ethereum

    //player1Address = TTTContract.methods.playerList(0).call({from:'0x40a21e04563c7955fDBDC1b43138354352204Cc5'})
    console.log(player1Address)
    console.log(player1AddressEntered)
    await sleep(3000);

  }



  //player1Balance = TTTContract.methods.playerBalance(player1Address).call({from:''}).then((f) => console.log(f))


  //TTTContract.methods.playerList(1).call({from:''}).then((f) => console.log(f))

}

// function checkP1address(){
//   player1Address = TTTContract.methods.playerList(0).call({from:'0x40a21e04563c7955fDBDC1b43138354352204Cc5'}).then((f) => console.log(f))
//   console.log(typeof(player1Address))
// }
