import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Contract } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("IntermediaryContract", function () {
    let intermediaryContract: Contract;
    let nftContract: Contract;
    let owner: SignerWithAddress;
    let addr1: SignerWithAddress;

    beforeEach(async function () {
        const Intermediary = await ethers.getContractFactory("IntermediaryContract");
        intermediaryContract = await Intermediary.deploy();

        const NFT = await ethers.getContractFactory("TestNFT");
        nftContract = await NFT.deploy(intermediaryContract.address);

        [owner, addr1] = await ethers.getSigners();
    });

    it("should allocate tokens correctly and create a new wallet if necessary", async function () {
        
        const tokenId = 1;
        nftContract.mintToGovId(1, ethers.utils.formatBytes32String("11157227783"));        

        const walletAddress = await intermediaryContract.identityToWallet(ethers.utils.formatBytes32String("11157227783"));
        expect(await nftContract.ownerOf(tokenId)).to.equal(walletAddress);
    });
});
