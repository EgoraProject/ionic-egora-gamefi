/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  INFTFactory,
  INFTFactoryInterface,
} from "../../../contracts/Marketplace.sol/INFTFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_royaltyFee",
        type: "uint256",
      },
    ],
    name: "createNFTCollection",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nft",
        type: "address",
      },
    ],
    name: "isNFT",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class INFTFactory__factory {
  static readonly abi = _abi;
  static createInterface(): INFTFactoryInterface {
    return new utils.Interface(_abi) as INFTFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): INFTFactory {
    return new Contract(address, _abi, signerOrProvider) as INFTFactory;
  }
}