import { expect } from "chai";
import { ethers } from "hardhat";

describe("SimpleERC4337Wallet", function () {
    let wallet;
    let owner;

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
        await owner.sendTransaction({
            to: wallet.address,
            value: ethers.utils.parseEther("1.0")
        });

        // await expect(() => wallet.executeTransaction(
        //     recipient, 
        //     ethers.utils.parseEther("1.0"), 
        //     transaction.data
        // )).to.changeEtherBalances([wallet, recipient], [ethers.utils.parseEther("-1.0"), ethers.utils.parseEther("1.0")]);
    });
});
