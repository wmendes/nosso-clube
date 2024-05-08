// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./IntermediaryContract.sol";


contract TestNFT is ERC721 {
    address public intermediaryContract;

    constructor( address _intermediaryContract ) ERC721("TestNFT", "TNFT") {
        intermediaryContract = _intermediaryContract;
    }

    function mint(address to, uint256 tokenId) public {
        _mint(to, tokenId);
    }

    function mintToGovId(uint256 tokenId, bytes32 identityHash) public {
        // transferFrom(msg.sender, intermediaryContract, tokenId);
        _mint(intermediaryContract, tokenId);
        IntermediaryContract(intermediaryContract).allocateTokens(identityHash, tokenId, address(this));
    }
    
}