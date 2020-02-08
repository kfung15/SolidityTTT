pragma solidity 0.5.3;

contract tictactoe {

    uint256 public playerCount;
    uint public betAmount;
    address owner;

    mapping(uint => Player) public player;

    address[] public playerList;

    mapping (address => uint) public playerBalance;

    uint totalBank;

    uint i;

    enum State { Waiting, InProgress, Finished }
    State public state;

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
        require(msg.value >= 0);
        incrementCount();
        playerList.push(msg.sender);
        playerBalance[msg.sender] += msg.value;
        totalBank += msg.value;

        betAmount = msg.value;
        owner = msg.sender;
        player[playerCount] = Player(playerCount, betAmount, owner);

    }

    function incrementCount() internal {
        playerCount += 1;
    }

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

    function () external payable {
        addPlayer();
    }
}
