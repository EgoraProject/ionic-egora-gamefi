import { BigNumber } from 'ethers';
import { ethers } from 'hardhat';
import { NFTFactory__factory, NFTMarketplace__factory } from '../typechain-types';


async function main() {

  const signers = await ethers.getSigners();
  const egoraNFTFactory = new NFTFactory__factory(signers[0]);
  const NFTFactory = await egoraNFTFactory.deploy();
  await NFTFactory.deployed();
  console.log('NFTFactory deployed to: ', NFTFactory.address);

  const egoraNFTMarketplace = new NFTMarketplace__factory(signers[0]);
  const platformFee = BigNumber.from(10); // 10%
  const feeRecipient = signers[0].address;
  const NFTMarketplace =  await egoraNFTMarketplace.deploy(platformFee, feeRecipient, NFTFactory.address);
  await NFTMarketplace.deployed();
  console.log('NFTMarketplace deployed to: ', NFTMarketplace.address);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;

})