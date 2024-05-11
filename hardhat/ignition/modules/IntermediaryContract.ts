import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const IntermediaryContractModule = buildModule("IntermediaryContract", (m) => {
  const intermediaryContract = m.contract("IntermediaryContract");
  return { intermediaryContract };
});

export default IntermediaryContractModule;
