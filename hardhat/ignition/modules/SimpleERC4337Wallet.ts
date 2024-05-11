import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SimpleERC4337WalletModule = buildModule("SimpleERC4337Wallet", (m) => {
  // update parameter with the local node's first signer's address
  const simpleERC4337Wallet = m.contract("SimpleERC4337Wallet", ["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"]);
  return { simpleERC4337Wallet };
});

export default SimpleERC4337WalletModule;
