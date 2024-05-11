// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleERC4337Wallet {
    address public owner;

    constructor(address _owner) {
        owner = _owner;
    }

    receive() external payable {}

    function executeTransaction(address to, uint256 value, bytes memory data) public {
        require(msg.sender == owner, "Only owner can execute transactions");
        (bool success, ) = to.call{value: value}(data);
        require(success, "Transaction failed");
    }

    function transferOwnership(address newOwner) public {
        require(msg.sender == owner, "Only the current owner can transfer ownership");
        owner = newOwner;
    }

}
