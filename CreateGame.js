 const bin = '608060405234801561001057600080fd5b506000600860006101000a81548160ff0219169083600281111561003057fe5b021790555060006007819055506107978061004c6000396000f3fe6080604052600436106100ae576000357c0100000000000000000000000000000000000000000000000000000000900480639e0551c6116100765780639e0551c614610194578063ae6d90731461021d578063c19d93fb14610298578063d24257c0146102d1578063da0b0682146102fc576100ae565b806327b5db8a146100b8578063302bcc57146100c257806344e73b78146100ed5780634e33f83b146101185780636cbc2ded1461017d575b6100b6610313565b005b6100c0610313565b005b3480156100ce57600080fd5b506100d7610502565b6040518082815260200191505060405180910390f35b3480156100f957600080fd5b50610102610508565b6040518082815260200191505060405180910390f35b34801561012457600080fd5b506101676004803603602081101561013b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610512565b6040518082815260200191505060405180910390f35b34801561018957600080fd5b5061019261052a565b005b3480156101a057600080fd5b506101cd600480360360208110156101b757600080fd5b8101908080359060200190929190505050610681565b604051808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390f35b34801561022957600080fd5b506102566004803603602081101561024057600080fd5b81019080803590602001909291905050506106cb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102a457600080fd5b506102ad610709565b604051808260028111156102bd57fe5b60ff16815260200191505060405180910390f35b3480156102dd57600080fd5b506102e661071c565b6040518082815260200191505060405180910390f35b34801561030857600080fd5b50610311610722565b005b6000341015151561032357600080fd5b61032b610759565b60043390806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505034600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550346006600082825401925050819055503460018190555033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060606040519081016040528060005481526020016001548152602001600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152506003600080548152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050565b60005481565b6000600654905090565b60056020528060005260406000206000915090505481565b6001600281111561053757fe5b600860009054906101000a900460ff16600281111561055257fe5b14151561055e57600080fd5b6002600860006101000a81548160ff0219169083600281111561057d57fe5b02179055503373ffffffffffffffffffffffffffffffffffffffff166108fc6006549081150290604051600060405180830381858888f193505050501580156105ca573d6000803e3d6000fd5b5060006007819055505b60005460075410156106775760006005600060046007548154811015156105f757fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506007600081548092919060010191905055506105d4565b6000600681905550565b60036020528060005260406000206000915090508060000154908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905083565b6004818154811015156106da57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600860009054906101000a900460ff1681565b60015481565b600260005414151561073357600080fd5b6001600860006101000a81548160ff0219169083600281111561075257fe5b0217905550565b6001600080828254019250508190555056fea165627a7a72305820fb71df71304efb799bd018fb0d12111682d8bc64b21b3ecaab55de03e976aa460029'

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
  account = '0xd883712ec157b89b3d0d630b5c51660e5d63dfae'

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
  TTTContract.deploy({data:bytecode}).send({from:account,gas:1500000,gasPrice:web3.utils.toWei('0.00003', 'ether')}).then((newContractInstance) => {TTTContract.options.address=newContractInstance.options.address})

}
