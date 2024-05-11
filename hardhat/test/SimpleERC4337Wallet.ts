import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Contract } from "ethers";
import { ethers } from "hardhat";

describe("SimpleERC4337Wallet", function () {
    let wallet: Contract;
    let owner: SignerWithAddress;

    beforeEach(async function () {
        [owner] = await ethers.getSigners();
        const Wallet = await ethers.getContractFactory("SimpleERC4337Wallet");
        wallet = await Wallet.deploy(owner.address);
    });

    it("should execute transactions", async function () {
        const recipient = ethers.Wallet.createRandom().address;
        const transaction = {
            to: recipient,
            value: ethers.utils.parseEther("1.0"),
            data: "0x"
        };

        // Funding wallet for transaction
        const result = await owner.sendTransaction(transaction);
    });
});
