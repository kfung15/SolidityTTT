var player1 = false;
var player2 = false;
var player1Address = undefined;
var player2Address = undefined;
var player1Balance = undefined;
var player2Balance = undefined;
var p1betConfirm = undefined;
var p2betConfirm = undefined;

var playerOneSent = document.getElementById("playerOneSent");
var playerTwoSent = document.getElementById("playerTwoSent");

var playerOneForm = document.getElementById("P1Bet");
var playerOneSubmitButton = document.getElementById("playerOneBet");
var playerTwoForm = document.getElementById("P2Bet");
var playerTwoSubmitButton = document.getElementById("playerTwoBet");
var startGame = document.getElementById("startGame");

let player1finalbet = document.getElementById("player1Bet");
let player2finalbet = document.getElementById("player2Bet");


//Function that waits for P1 to send ETH before proceeding
async function playerOneSentEth() {
  player1Address = await TTTContract.methods
    .playerList(0)
    .call({ from: account });
  if (typeof player1Address != "string") {
    document.getElementById("gameStatus").innerHTML = "P1, please try again!";
    console.log("P1 not yet sent!");
  } else {
    document.getElementById("gameStatus").innerHTML =
      "Player 2, please send ETH over to the game!";
    playerOneSent.style.display = "none";
    playerTwoSent.style.display = "block";
    console.log("P1 Sent!");
    console.log(player1Address);
    console.log(typeof player1Address);
  }
}

//Function that waits for P2 to send ETH before proceeding
async function playerTwoSentEth() {
  player2Address = await TTTContract.methods
    .playerList(1)
    .call({ from: account });
  if (typeof player2Address != "string") {
    document.getElementById("gameStatus").innerHTML = "P2, please try again!";
    console.log("P2 not yet sent!");
  } else {
    document.getElementById("gameStatus").innerHTML =
      "Thank you! Players, please input your bets!";
    console.log("P2 Sent!");
    //Make
    playerTwoSent.style.display = "none";
    playerOneForm.style.display = "block";
    playerOneSubmitButton.style.display = "block";
    playerTwoForm.style.display = "block";
    playerTwoSubmitButton.style.display = "block";
  }
}

//Function that accepts and stores P1's bet number
function playerOneSubmit() {
  p1betConfirm = Number(document.getElementById("P1Bet").value);
  if (Number.isInteger(p1betConfirm)) {
    document.getElementById("P1Bet").style.display = "none";
    document.getElementById("playerOneBet").style.display = "none";
    var p1default = "Player 1 has bet:";
    document.getElementById("p1bet").innerHTML = p1default.concat(p1betConfirm);
    document.getElementById("p1bet").style.display = "block";
    document.getElementById("gameStatus").innerHTML =
      "Hello! Please place your bets!";
    player1finalbet.value = p1betConfirm;
    console.log(p1betConfirm);
    console.log(player1finalbet.value);
    console.log(document.getElementById("player1Bet").value);
    player1 = true;

    if (player1 && player2) {
      document.getElementById("gameStatus").innerHTML = "Game in Progress!";
      TTTContract.methods
        .beginGame()
        .send({
          from: account,
          gas: 1000000,
          gasPrice: web3.utils.toWei("0.0000000025", "ether")
        })
        .then(f => console.log(f));
      checkWinner();
    }
  } else {
    document.getElementById("gameStatus").innerHTML =
      "Player 1, please input an integer value!";
    console.log(typeof p1bet);
  }
}

//Function that accepts and stores P2's bet number
function playerTwoSubmit() {
  p2betConfirm = Number(document.getElementById("P2Bet").value);
  if (Number.isInteger(p2betConfirm)) {
    document.getElementById("P2Bet").style.display = "none";
    document.getElementById("playerTwoBet").style.display = "none";
    var p2default = "Player 2 has bet:";
    document.getElementById("p2bet").innerHTML = p2default.concat(p2betConfirm);
    document.getElementById("p2bet").style.display = "block";
    document.getElementById("gameStatus").innerHTML =
      "Hello! Please place your bets!";
    player2finalbet.value = p2betConfirm;
    console.log(p2betConfirm);
    console.log(player2finalbet.value);
    console.log(document.getElementById("player2Bet").value);
    player2 = true;

    if (player1 && player2) {
      document.getElementById("gameStatus").innerHTML = "Game in Progress!";
      TTTContract.methods
        .beginGame()
        .send({
          from: account,
          gas: 1000000,
          gasPrice: web3.utils.toWei("0.0000000025", "ether")
        })
        .then(f => console.log(f));
      checkWinner();
    }
  } else {
    document.getElementById("gameStatus").innerHTML =
      "Player 2, please input an integer value!";
    console.log(Number.isInteger("P2Bet"));
    console.log("P2Bet");
  }
}

//-----------------------------------------------------
//Import from randomNumberGame.js

var arr = [];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//Function that generates an array with 5 random numbers
function getRandomInts() {
  var ints = [];
  while (ints.length < 5) {
    var randNum = getRandomInt(1, 50);
    if (ints.indexOf(randNum) == -1) {
      ints.push(randNum);
    }
  }
  console.log(ints);
  arr = ints;
  return ints;
}

function checkArr(num) {
  console.log(arr);
}

//Function that adds up all the numbers in the array, and checks for the winner.
//The winner is defined as the player that guessed the number closest to the sum.
function checkWinner() {
  arr = getRandomInts(10);
  var sum = arr.reduce((a, b) => a + b, 0);
  if (Math.abs(p1betConfirm - sum) < Math.abs(p2betConfirm - sum)) {
    console.log("Player 1 wins!");
    console.log(p1betConfirm);
    console.log(typeof p1betConfirm);
    console.log(p2betConfirm);
    console.log(typeof p2betConfirm);
    TTTContract.methods
      .endGame(player1Address)
      .send({
        from: account,
        gas: 1000000,
        gasPrice: web3.utils.toWei("0.0000000025", "ether")
      })
      .then(f => console.log(f));
  } else if (Math.abs(p1betConfirm - sum) > Math.abs(p2betConfirm - sum)) {
    console.log("Player 2 wins!");
    console.log(p1betConfirm);
    console.log(typeof p1betConfirm);
    console.log(p2betConfirm);
    console.log(typeof p2betConfirm);
    TTTContract.methods
      .endGame(player2Address)
      .send({
        from: account,
        gas: 1000000,
        gasPrice: web3.utils.toWei("0.0000000025", "ether")
      })
      .then(f => console.log(f));
  } else {
    console.log("It's a draw!");
    console.log(p1betConfirm);
    console.log(typeof p1betConfirm);
    console.log(p2betConfirm);
    console.log(typeof p2betConfirm);
  }
}
