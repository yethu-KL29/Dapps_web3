// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

contract crypto{
  uint256 count;

  struct Transfer {
    address sender;
    address reciever;
    string message;
    uint256 amount;
    uint256 timestamp;
    string keyword;
  }
  Transfer[] public transactions;
  function addtoBlockchain (address payable reciever,uint amount,string memory keyword,string memory message) public{
        count+=1;
        transactions.push(Transfer(msg.sender,reciever,message,amount,block.timestamp,keyword));
  }
  function getTransaction () public view returns (Transfer[] memory){
     
  }
function getcount() public view returns(uint256){
    return count;
}
}