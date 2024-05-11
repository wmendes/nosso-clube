import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SimpleERC4337WalletModule = buildModule("SimpleERC4337Wallet", (m) => {
  const simpleERC4337Wallet = m.contract("SimpleERC4337Wallet", ["0x50A8C7f3D07BA8f05458F229D639c17C3D82D44A"]);
  return { simpleERC4337Wallet };
});

export default SimpleERC4337WalletModule;
