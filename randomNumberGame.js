var arr = [];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomInts() {
  var ints = [];
  while (ints.length < 5) {
    var randNum = getRandomInt(1, 50);
    if(ints.indexOf(randNum) == -1){
      ints.push(randNum);
    }
  }
  console.log(ints);
  arr = ints
  return ints
}

function checkArr(num){
  console.log(arr);
}

//Create the Game Logic here
//Add up all the numbers in the Array
//Check each players' number
//The winner is the one that is closest to the sum
//If both are equally close, the randomly pick the winner.

function checkWinner(playerOne, playerTwo){
  arr = getRandomInts(10)
  var sum = arr.reduce((a,b) => a + b, 0)
  if(Math.abs(playerOne - sum) < Math.abs(playerTwo - sum)) {
    console.log("Player 1 wins!")
    return 1
  } else if (Math.abs(playerOne - sum) > Math.abs(playerTwo - sum)){
    console.log("Player 2 wins!")
    return 2
  } else {
    console.log("It's a draw!")
    return 3
  }

}
