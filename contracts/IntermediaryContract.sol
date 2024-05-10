// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "./SimpleERC4337Wallet.sol";
import "hardhat/console.sol";

contract IntermediaryContract {
    IERC721Enumerable public token;
    SimpleERC4337Wallet public userWallet;
    address[] public erc721Contracts;

    mapping(bytes32 => address) public identityToWallet;    



    function setWalletAddress(bytes32 identityHash, address wallet) public {
        identityToWallet[identityHash] = wallet;
    }

    function allocateTokens(bytes32 identityHash, uint256 tokenId, address tokenAdress) public {
        token = IERC721Enumerable(tokenAdress);
        address walletAddress = returnOrCreateWallet(identityHash);
        token.transferFrom(address(this), walletAddress, tokenId);
        erc721Contracts.push(tokenAdress);

        console.log("Token number %s of contract %s transferred to wallet %s", tokenId, tokenAdress, walletAddress);

    }

    function returnOrCreateWallet(bytes32 identityHash) private returns (address newWallet) {
        address walletAddress = identityToWallet[identityHash];
        if (walletAddress == address(0)) {        
            walletAddress = address(new SimpleERC4337Wallet(address(this)));
            setWalletAddress(identityHash, walletAddress);
        }
        return walletAddress;
    }

    // Retrieve all token IDs owned by the specified wallet across all listed ERC-721 contracts
    function listAllTokens(bytes32 identityHash) public view returns (address[] memory, uint256[] memory) {
        // Determine the maximum possible result size
        uint256 maxSize = 0;
        address wallet = identityToWallet[identityHash];
        for (uint256 i = 0; i < erc721Contracts.length; i++) {
            IERC721Enumerable erc721 = IERC721Enumerable(erc721Contracts[i]);
            maxSize += erc721.balanceOf(wallet);
        }

        // Initialize result arrays
        address[] memory contractAddresses = new address[](maxSize);
        uint256[] memory tokenIds = new uint256[](maxSize);

        uint256 currentIndex = 0;
        for (uint256 i = 0; i < erc721Contracts.length; i++) {
            IERC721Enumerable erc721 = IERC721Enumerable(erc721Contracts[i]);
            uint256 balance = erc721.balanceOf(wallet);
            for (uint256 j = 0; j < balance; j++) {
                contractAddresses[currentIndex] = erc721Contracts[i];
                tokenIds[currentIndex] = erc721.tokenOfOwnerByIndex(wallet, j);
                currentIndex++;
            }
        }

        // Resize arrays to remove any unused slots
        assembly {
            mstore(contractAddresses, currentIndex)
            mstore(tokenIds, currentIndex)
        }

        return (contractAddresses, tokenIds);
    }
    
    function claimWallet(bytes32 identityHash) public {
        SimpleERC4337Wallet(payable(identityToWallet[identityHash])).transferOwnership(msg.sender);
    }
}
