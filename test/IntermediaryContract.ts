import { expect } from "chai";
import { ethers } from "hardhat";

describe("IntermediaryContract", function () {
    let intermediaryContract;
    let nftContract;
    let owner;
    let addr1;

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
