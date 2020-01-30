pragma solidity 0.5.1;

//I still need to implement this into the main TTT.sol file
//Also I haven't looked at security yet.

contract test{
    mapping (address => uint) balances;
    uint totalBank;
    uint totalPlayers;
    uint i = 0;
    address[] public investors;

    function Deposit() public payable{
        balances[msg.sender] += msg.value;
        totalBank += msg.value;
        totalPlayers += 1;
        investors.push(msg.sender);

    }
    function Withdraw() public{
        //msg.sender.transfer(balances[msg.sender]);
        msg.sender.transfer(totalBank);
        for (i = 0; i < totalPlayers; i++){
            balances[investors[i]] = 0;
        }
        totalBank = 0;
    }
    function CheckBalance() view public returns(uint){
        //return balances[msg.sender];
        return totalBank;
    }
}
