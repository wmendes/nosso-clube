// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "./SimpleERC4337Wallet.sol";

contract IntermediaryContract {
    IERC721 public token;
    mapping(bytes32 => address) public identityToWallet;


    function setWalletAddress(bytes32 identityHash, address wallet) public {
        identityToWallet[identityHash] = wallet;
    }

    function allocateTokens(bytes32 identityHash, uint256 tokenId, address tokenAdress) public {
        token = IERC721(tokenAdress);
        address walletAddress = identityToWallet[identityHash];
        if (walletAddress == address(0)) {
            // Create a new wallet if it does not exist
            walletAddress = createWallet(identityHash); // Assuming createWallet returns an address
            identityToWallet[identityHash] = walletAddress;
        }
        token.transferFrom(address(this), walletAddress, tokenId);
    }

    function createWallet(bytes32 identityHash) private returns (address newWallet) {
        newWallet = address(new SimpleERC4337Wallet(address(this)));
        identityToWallet[identityHash] = newWallet;
    }
}
