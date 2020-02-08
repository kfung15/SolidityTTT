pragma solidity 0.5.3;

contract tictactoe {

    //Variables for the original constructor
    uint256 public playerCount;
    uint public betAmount;
    address owner;

    //Each player has their own integer
    mapping(uint => Player) public player;

    //For collection of player addresses
    address[] public playerList;

    //Maps the player to their deposit amount.
    mapping (address => uint) public playerBalance;


    //How much ETH is in the contract itself.
    uint totalBank;

    //For the endgame count.
    uint i;

    //This is the state of the game
    enum State { Waiting, InProgress, Finished }
    State public state;

    //This is the structure of a player
    struct Player {
        uint _id;
        uint _betAmount;
        address _owner;
    }

    constructor() public {
        state = State.Waiting;
        i = 0;
    }

    function addPlayer() public payable {
        //Player must send some ether
        require(msg.value >= 0);
        //Increase player count by 1
        incrementCount();
        //Appends the player's address to the address list, for later reference.
        playerList.push(msg.sender);
        //Increase the value for the individual player.
        playerBalance[msg.sender] += msg.value;
        //Increase the value for the contract itself.
        totalBank += msg.value;


        //Original Player Constructor code
        //Stores amount that player bet
        betAmount = msg.value;
        //Stores address of player's wallet
        owner = msg.sender;
        //Creates the player object based on the information above
        player[playerCount] = Player(playerCount, betAmount, owner);

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

    function endGame (address payable receiverAdd) public payable{
        require(state == State.InProgress);
        state = State.Finished;
        address(receiverAdd).transfer(totalBank);
        for (i = 0; i < playerCount; i++){
            playerBalance[playerList[i]] = 0;
        }
        totalBank = 0;
    }

    function CheckBalance () view public returns(uint) {
        return totalBank;
    }


    //Fallback function for external purposes
    function () external payable {
        addPlayer();
    }
}
