const hre = require("hardhat");

async function main() {
 

  const Crypto = await hre.ethers.getContractFactory("crypto");
  const k = await Crypto.deploy();

  await k.deployed();

  console.log(
    ` deployed to ${k.address}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
