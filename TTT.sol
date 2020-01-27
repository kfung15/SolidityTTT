pragma solidity 0.5.1;

contract tictactoe {

    //Making explicit all the variables
    uint256 public playerCount;
    uint public betAmount;
    mapping(uint => Player) public player;
    address payable wallet;
    address payable masterWallet;
    address owner;

    //This is the state of the game
    enum State { Waiting, InProgress, Finished }
    State public state;

    //You can only send requests to the original contract address
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    //This is the structure of a player
    struct Player {
        uint _id;
        string _playerName;
        uint _betAmount;
        address _owner;
    }

    constructor(address payable _wallet) public {
        owner = msg.sender;
        wallet = _wallet;
        state = State.Waiting;
        masterWallet = 0x99E093e9D26A2B74a37f442Dc8584a068C1eB763;
    }

    function addPlayer(string memory _playerName) public payable {
        //Player must send some ether
        require(msg.value >= 0);
        //Increase player count by 1
        incrementCount();
        //Stores amount that player bet
        betAmount = msg.value;
        //Stores address of player's wallet
        owner = msg.sender;
        //Creates the player object based on the information above
        player[playerCount] = Player(playerCount, _playerName, betAmount, owner);
        //Transfers the sent ether to the master wallet
        masterWallet.transfer(msg.value);

    }

    //Function that increases player count
    function incrementCount() internal {
        playerCount += 1;
    }

    //Function that signals the start of the game once two players have
    //placed bets.
    function beginGame() public {
        require(playerCount == 2);
        state = State.InProgress;
    }
}


//For developmental purposes, ignore pls
/*
contract backdoor is tictactoe {

    function forceAdd(string memory _firstName, string memory _lastName) public{
        tictactoe.addPerson(_firstName, _lastName);
    }
}

*/
