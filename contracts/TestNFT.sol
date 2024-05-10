// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./IntermediaryContract.sol";

abstract contract MintToGovIdInterface {
    address public intermediaryContract;

    constructor(address _intermediaryContract) {
        intermediaryContract = _intermediaryContract;
    }

    // Abstract function for minting to government ID
    function mintToGovId(uint256 tokenId, bytes32 identityHash) public virtual;
}

contract TestNFT is ERC721, MintToGovIdInterface {
    constructor(address _intermediaryContract) ERC721("TestNFT", "TNFT") MintToGovIdInterface(_intermediaryContract) {}

    function mint(address to, uint256 tokenId) public {
        _mint(to, tokenId);
    }

    // Implementation of mintToGovId from the interface
    function mintToGovId(uint256 tokenId, bytes32 identityHash) public override {
        _mint(intermediaryContract, tokenId);
        IntermediaryContract(intermediaryContract).allocateTokens(identityHash, tokenId, address(this));
    }
}
