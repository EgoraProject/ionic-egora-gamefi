/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  EgoraNFT,
  EgoraNFTInterface,
} from "../../../contracts/NFT.sol/EgoraNFT";

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
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_royaltyFee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_royaltyRecipient",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRoyaltyFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRoyaltyRecipient",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_royaltyFee",
        type: "uint256",
      },
    ],
    name: "updateRoyaltyFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001e4938038062001e498339810160408190526200003491620003cb565b8451859085906200004d90600090602085019062000255565b5080516200006390600190602084019062000255565b505050620000806200007a6200012260201b60201c565b62000126565b612710821115620000d85760405162461bcd60e51b815260206004820152601a60248201527f63616e2774206d6f7265207468616e2031302070657263656e7400000000000060448201526064015b60405180910390fd5b6001600160a01b038116620000ec57600080fd5b6009829055600a80546001600160a01b0319166001600160a01b038316179055620001178362000178565b5050505050620004b4565b3390565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b62000182620001f7565b6001600160a01b038116620001e95760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401620000cf565b620001f48162000126565b50565b6007546001600160a01b03163314620002535760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401620000cf565b565b828054620002639062000461565b90600052602060002090601f016020900481019282620002875760008555620002d2565b82601f10620002a257805160ff1916838001178555620002d2565b82800160010185558215620002d2579182015b82811115620002d2578251825591602001919060010190620002b5565b50620002e0929150620002e4565b5090565b5b80821115620002e05760008155600101620002e5565b80516001600160a01b03811681146200031357600080fd5b919050565b600082601f83011262000329578081fd5b81516001600160401b03808211156200034657620003466200049e565b604051601f8301601f19908116603f011681019082821181831017156200037157620003716200049e565b816040528381526020925086838588010111156200038d578485fd5b8491505b83821015620003b0578582018301518183018401529082019062000391565b83821115620003c157848385830101525b9695505050505050565b600080600080600060a08688031215620003e3578081fd5b85516001600160401b0380821115620003fa578283fd5b6200040889838a0162000318565b965060208801519150808211156200041e578283fd5b506200042d8882890162000318565b9450506200043e60408701620002fb565b9250606086015191506200045560808701620002fb565b90509295509295909350565b600181811c908216806200047657607f821691505b602082108114156200049857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b61198580620004c46000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c8063715018a6116100b8578063a22cb4651161007c578063a22cb46514610273578063b88d4fde14610286578063c87b56dd14610299578063d204c45e146102ac578063e985e9c5146102bf578063f2fde38b146102fb57600080fd5b8063715018a614610239578063820bdcdc146102415780638da5cb5b1461024957806395d89b411461025a57806395edc18c1461026257600080fd5b806342842e0e116100ff57806342842e0e146101cc57806342966c68146101df5780634e83be47146101f25780636352211e1461020557806370a082311461021857600080fd5b806301ffc9a71461013c57806306fdde0314610164578063081812fc14610179578063095ea7b3146101a457806323b872dd146101b9575b600080fd5b61014f61014a366004611683565b61030e565b60405190151581526020015b60405180910390f35b61016c610360565b60405161015b919061176b565b61018c6101873660046116bb565b6103f2565b6040516001600160a01b03909116815260200161015b565b6101b76101b236600461165a565b610419565b005b6101b76101c736600461150d565b610534565b6101b76101da36600461150d565b610566565b6101b76101ed3660046116bb565b610581565b6101b76102003660046116bb565b6105b2565b61018c6102133660046116bb565b610611565b61022b6102263660046114c1565b610671565b60405190815260200161015b565b6101b76106f7565b60095461022b565b6007546001600160a01b031661018c565b61016c61070b565b600a546001600160a01b031661018c565b6101b76102813660046115c1565b61071a565b6101b7610294366004611548565b610729565b61016c6102a73660046116bb565b610761565b6101b76102ba3660046115fb565b61076c565b61014f6102cd3660046114db565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6101b76103093660046114c1565b6107a3565b60006001600160e01b031982166380ac58cd60e01b148061033f57506001600160e01b03198216635b5e139f60e01b145b8061035a57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461036f9061188d565b80601f016020809104026020016040519081016040528092919081815260200182805461039b9061188d565b80156103e85780601f106103bd576101008083540402835291602001916103e8565b820191906000526020600020905b8154815290600101906020018083116103cb57829003601f168201915b5050505050905090565b60006103fd82610819565b506000908152600460205260409020546001600160a01b031690565b600061042482610611565b9050806001600160a01b0316836001600160a01b031614156104975760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806104b357506104b381336102cd565b6105255760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000606482015260840161048e565b61052f8383610878565b505050565b61053f335b826108e6565b61055b5760405162461bcd60e51b815260040161048e906117d0565b61052f838383610965565b61052f83838360405180602001604052806000815250610729565b61058a33610539565b6105a65760405162461bcd60e51b815260040161048e906117d0565b6105af81610b01565b50565b6105ba610b0a565b61271081111561060c5760405162461bcd60e51b815260206004820152601a60248201527f63616e2774206d6f7265207468616e2031302070657263656e74000000000000604482015260640161048e565b600955565b6000818152600260205260408120546001600160a01b03168061035a5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161048e565b60006001600160a01b0382166106db5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b606482015260840161048e565b506001600160a01b031660009081526003602052604090205490565b6106ff610b0a565b6107096000610b64565b565b60606001805461036f9061188d565b610725338383610bb6565b5050565b61073333836108e6565b61074f5760405162461bcd60e51b815260040161048e906117d0565b61075b84848484610c85565b50505050565b606061035a82610cb8565b610774610b0a565b600061077f60085490565b905061078f600880546001019055565b6107998382610dc1565b61052f8183610ddb565b6107ab610b0a565b6001600160a01b0381166108105760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161048e565b6105af81610b64565b6000818152600260205260409020546001600160a01b03166105af5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161048e565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906108ad82610611565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000806108f283610611565b9050806001600160a01b0316846001600160a01b0316148061093957506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b8061095d5750836001600160a01b0316610952846103f2565b6001600160a01b0316145b949350505050565b826001600160a01b031661097882610611565b6001600160a01b0316146109dc5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b606482015260840161048e565b6001600160a01b038216610a3e5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161048e565b610a49600082610878565b6001600160a01b0383166000908152600360205260408120805460019290610a7290849061184a565b90915550506001600160a01b0382166000908152600360205260408120805460019290610aa090849061181e565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6105af81610e75565b6007546001600160a01b031633146107095760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048e565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b03161415610c185760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161048e565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610c90848484610965565b610c9c84848484610eb5565b61075b5760405162461bcd60e51b815260040161048e9061177e565b6060610cc382610819565b60008281526006602052604081208054610cdc9061188d565b80601f0160208091040260200160405190810160405280929190818152602001828054610d089061188d565b8015610d555780601f10610d2a57610100808354040283529160200191610d55565b820191906000526020600020905b815481529060010190602001808311610d3857829003601f168201915b505050505090506000610d7360408051602081019091526000815290565b9050805160001415610d86575092915050565b815115610db8578082604051602001610da09291906116ff565b60405160208183030381529060405292505050919050565b61095d84610fc2565b610725828260405180602001604052806000815250611036565b6000828152600260205260409020546001600160a01b0316610e565760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b606482015260840161048e565b6000828152600660209081526040909120825161052f92840190611360565b610e7e81611069565b60008181526006602052604090208054610e979061188d565b1590506105af5760008181526006602052604081206105af916113e4565b60006001600160a01b0384163b15610fb757604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610ef990339089908890889060040161172e565b602060405180830381600087803b158015610f1357600080fd5b505af1925050508015610f43575060408051601f3d908101601f19168201909252610f409181019061169f565b60015b610f9d573d808015610f71576040519150601f19603f3d011682016040523d82523d6000602084013e610f76565b606091505b508051610f955760405162461bcd60e51b815260040161048e9061177e565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061095d565b506001949350505050565b6060610fcd82610819565b6000610fe460408051602081019091526000815290565b90506000815111611004576040518060200160405280600081525061102f565b8061100e84611104565b60405160200161101f9291906116ff565b6040516020818303038152906040525b9392505050565b611040838361121e565b61104d6000848484610eb5565b61052f5760405162461bcd60e51b815260040161048e9061177e565b600061107482610611565b9050611081600083610878565b6001600160a01b03811660009081526003602052604081208054600192906110aa90849061184a565b909155505060008281526002602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6060816111285750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611152578061113c816118c8565b915061114b9050600a83611836565b915061112c565b60008167ffffffffffffffff81111561117b57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156111a5576020820181803683370190505b5090505b841561095d576111ba60018361184a565b91506111c7600a866118e3565b6111d290603061181e565b60f81b8183815181106111f557634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350611217600a86611836565b94506111a9565b6001600160a01b0382166112745760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161048e565b6000818152600260205260409020546001600160a01b0316156112d95760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161048e565b6001600160a01b038216600090815260036020526040812080546001929061130290849061181e565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b82805461136c9061188d565b90600052602060002090601f01602090048101928261138e57600085556113d4565b82601f106113a757805160ff19168380011785556113d4565b828001600101855582156113d4579182015b828111156113d45782518255916020019190600101906113b9565b506113e092915061141a565b5090565b5080546113f09061188d565b6000825580601f10611400575050565b601f0160209004906000526020600020908101906105af91905b5b808211156113e0576000815560010161141b565b600067ffffffffffffffff8084111561144a5761144a611923565b604051601f8501601f19908116603f0116810190828211818310171561147257611472611923565b8160405280935085815286868601111561148b57600080fd5b858560208301376000602087830101525050509392505050565b80356001600160a01b03811681146114bc57600080fd5b919050565b6000602082840312156114d2578081fd5b61102f826114a5565b600080604083850312156114ed578081fd5b6114f6836114a5565b9150611504602084016114a5565b90509250929050565b600080600060608486031215611521578081fd5b61152a846114a5565b9250611538602085016114a5565b9150604084013590509250925092565b6000806000806080858703121561155d578081fd5b611566856114a5565b9350611574602086016114a5565b925060408501359150606085013567ffffffffffffffff811115611596578182fd5b8501601f810187136115a6578182fd5b6115b58782356020840161142f565b91505092959194509250565b600080604083850312156115d3578182fd5b6115dc836114a5565b9150602083013580151581146115f0578182fd5b809150509250929050565b6000806040838503121561160d578182fd5b611616836114a5565b9150602083013567ffffffffffffffff811115611631578182fd5b8301601f81018513611641578182fd5b6116508582356020840161142f565b9150509250929050565b6000806040838503121561166c578182fd5b611675836114a5565b946020939093013593505050565b600060208284031215611694578081fd5b813561102f81611939565b6000602082840312156116b0578081fd5b815161102f81611939565b6000602082840312156116cc578081fd5b5035919050565b600081518084526116eb816020860160208601611861565b601f01601f19169290920160200192915050565b60008351611711818460208801611861565b835190830190611725818360208801611861565b01949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611761908301846116d3565b9695505050505050565b60208152600061102f60208301846116d3565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b60008219821115611831576118316118f7565b500190565b6000826118455761184561190d565b500490565b60008282101561185c5761185c6118f7565b500390565b60005b8381101561187c578181015183820152602001611864565b8381111561075b5750506000910152565b600181811c908216806118a157607f821691505b602082108114156118c257634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156118dc576118dc6118f7565b5060010190565b6000826118f2576118f261190d565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b0319811681146105af57600080fdfea26469706673582212203b215e30ed9423428b4441fa8a8425320b80340e2648ba1869e64dbfbd4e78d264736f6c63430008040033";

type EgoraNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EgoraNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EgoraNFT__factory extends ContractFactory {
  constructor(...args: EgoraNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    _royaltyFee: PromiseOrValue<BigNumberish>,
    _royaltyRecipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<EgoraNFT> {
    return super.deploy(
      _name,
      _symbol,
      _owner,
      _royaltyFee,
      _royaltyRecipient,
      overrides || {}
    ) as Promise<EgoraNFT>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    _royaltyFee: PromiseOrValue<BigNumberish>,
    _royaltyRecipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _owner,
      _royaltyFee,
      _royaltyRecipient,
      overrides || {}
    );
  }
  override attach(address: string): EgoraNFT {
    return super.attach(address) as EgoraNFT;
  }
  override connect(signer: Signer): EgoraNFT__factory {
    return super.connect(signer) as EgoraNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EgoraNFTInterface {
    return new utils.Interface(_abi) as EgoraNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EgoraNFT {
    return new Contract(address, _abi, signerOrProvider) as EgoraNFT;
  }
}