var fs = require('fs')
Web3 = require('web3')
var account0;
web3 = new Web3("http://localhost:8545")

function createNewGame () {

  //Setting the default address as Address0.
  web3.eth.getAccounts().then(function(result){account0 = result[0];})

  //Still need to figure out how to create the ABI and Bin files within this file itself.

  //Reading the ABI and Bin files
  bytecode = fs.readFileSync('TTT_sol_tictactoe.bin').toString()
  abi = JSON.parse(fs.readFileSync('TTT_sol_tictactoe.abi').toString())

  //Defining the contract
  TTTContract = new web3.eth.Contract(abi, account0);

  //Deploying the contract
  TTTContract.deploy({data:bytecode}).send({from:account0,gas:1500000,gasPrice:web3.utils.toWei('0.00003', 'ether')}).then((newContractInstance) =>{TTTContract.options.address=newContractInstance.options.address});
}
