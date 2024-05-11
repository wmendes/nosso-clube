import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TestNFTModule = buildModule("TestNFTModule", (m) => {
    // update value after deploying IntermediaryContract -> we are going to use its address
    const intermediaryAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const testNFT = m.contract("TestNFT", [intermediaryAddress]);
    return { testNFT };
});

export default TestNFTModule;