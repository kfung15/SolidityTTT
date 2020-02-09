pragma solidity 0.5.3;

contract tictactoe {

    uint256 private playerCount;
    uint private betAmount;
    address owner;
    uint totalBank;

    function addPlayer() public payable returns(uint256, uint, address) {
        require(msg.value >= 0 && playerCount < 2);
        playerCount += 1;
        totalBank += msg.value;
        betAmount = msg.value;
        owner = msg.sender;
        return (playerCount, betAmount, owner);

    }

    function endGame (address payable receiverAdd) private payable{
        address(receiverAdd).transfer(totalBank);
    }

    function () external payable {
    }
}
