 const bin = '608060405234801561001057600080fd5b506000600860006101000a81548160ff0219169083600281111561003057fe5b021790555060006007819055506107c58061004c6000396000f3fe6080604052600436106100ae576000357c0100000000000000000000000000000000000000000000000000000000900480639e0551c6116100765780639e0551c6146101c1578063ae6d90731461024a578063c19d93fb146102c5578063d24257c0146102fe578063da0b068214610329576100ae565b806327b5db8a146100b85780632a035b6c146100c2578063302bcc571461010657806344e73b78146101315780634e33f83b1461015c575b6100b6610340565b005b6100c0610340565b005b610104600480360360208110156100d857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061052f565b005b34801561011257600080fd5b5061011b610687565b6040518082815260200191505060405180910390f35b34801561013d57600080fd5b5061014661068d565b6040518082815260200191505060405180910390f35b34801561016857600080fd5b506101ab6004803603602081101561017f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610697565b6040518082815260200191505060405180910390f35b3480156101cd57600080fd5b506101fa600480360360208110156101e457600080fd5b81019080803590602001909291905050506106af565b604051808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390f35b34801561025657600080fd5b506102836004803603602081101561026d57600080fd5b81019080803590602001909291905050506106f9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102d157600080fd5b506102da610737565b604051808260028111156102ea57fe5b60ff16815260200191505060405180910390f35b34801561030a57600080fd5b5061031361074a565b6040518082815260200191505060405180910390f35b34801561033557600080fd5b5061033e610750565b005b6000341015151561035057600080fd5b610358610787565b60043390806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505034600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550346006600082825401925050819055503460018190555033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060606040519081016040528060005481526020016001548152602001600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152506003600080548152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050565b6001600281111561053c57fe5b600860009054906101000a900460ff16600281111561055757fe5b14151561056357600080fd5b6002600860006101000a81548160ff0219169083600281111561058257fe5b02179055508073ffffffffffffffffffffffffffffffffffffffff166108fc6006549081150290604051600060405180830381858888f193505050501580156105cf573d6000803e3d6000fd5b5060006007819055505b600054600754101561067c5760006005600060046007548154811015156105fc57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506007600081548092919060010191905055506105d9565b600060068190555050565b60005481565b6000600654905090565b60056020528060005260406000206000915090505481565b60036020528060005260406000206000915090508060000154908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905083565b60048181548110151561070857fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600860009054906101000a900460ff1681565b60015481565b600260005414151561076157600080fd5b6001600860006101000a81548160ff0219169083600281111561078057fe5b0217905550565b6001600080828254019250508190555056fea165627a7a723058204ddab4201cbf5b5895c0cd00c5a8b77eb7deed09a1d9e3219b2ecbf04a6dee810029'

 const abiRaw = '[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[],"name":"CheckBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"addPlayer","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"beginGame","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"betAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"endGame","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"player","outputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_betAmount","type":"uint256"},{"internalType":"address","name":"_owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"playerBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"playerCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"playerList","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"internalType":"enum tictactoe.State","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"}]'

var account;
//web3 = new Web3("http://localhost:8545")
web3 = new Web3("ws://127.0.0.1:8545")

function createNewGame() {

  //Setting the default address as Address0.
  // web3.eth.getAccounts().then(result => {
  //   account = result[0]
  // })


  //web3.eth.getAccounts().then(result => {account = result[0]})
  account = '0xBA4D1355bAD045CF0Cf17894D8122Bc33DB8Dd66'

  console.log(account)


  //Still need to figure out how to create the ABI and Bin files within this file itself.

  //Reading the ABI and Bin files
  var bytecode = bin
  var abi = JSON.parse(abiRaw)
  console.log(abi)

  //Defining the contract
  TTTContract = new web3.eth.Contract(abi, account);
  console.log(TTTContract)

  //Deploying the contract
  //Consider reducing the gas, because right now you need a minimum of 45ETH in the account lol.
  //TTTContract.deploy({data:bytecode}).send({from:account,gas:21000,gasPrice:web3.utils.toWei('0.00003', 'ether')}).then((newContractInstance) => {TTTContract.options.address=newContractInstance.options.address})
  TTTContract.deploy({data:bytecode}).send({from:'0xBA4D1355bAD045CF0Cf17894D8122Bc33DB8Dd66',gas:1000000,gasPrice:web3.utils.toWei("0.0000000025","ether")}).then((newContractInstance) =>{TTTContract.options.address=newContractInstance.options.address});

  var gameStatus = document.getElementById("gameStatus")
  var createGameButton = document.getElementById("createGameButton")
  var arrayCheckButton = document.getElementById("ArrayCheck")
  var contractCheckButton = document.getElementById("ContractAddress")
  var qrGen = document.getElementById("QRgen")
  var p1betConfirm = document.getElementById("p1betConfirm")
  var p2betConfirm = document.getElementById("p2betConfirm")
  var playerOneSent = document.getElementById("playerOneSent")


  createGameButton.style.display = "none"
  gameStatus.style.display = "block"
  arrayCheckButton.style.display = "block"
  contractCheckButton.style.display = "block"
  qrGen.style.display = "block"
  playerOneSent.style.display = "block"
  }

function checkMethods(){
  console.log(TTTContract.methods)
}
