// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./NFT.sol";

/* NFT Factory
    Create new NFT collection
*/
contract NFTFactory {
    // owner address => nft list
    mapping(address => address[]) private nfts;

    mapping(address => bool) private NFT;

    event CreatedNFTCollection(
        address creator,
        address nft,
        string name,
        string symbol
    );

    function createNFTCollection(
        string memory _name,
        string memory _symbol,
        uint256 _royaltyFee,
        address _royaltyRecipient
    ) external {
        EgoraNFT nft = new EgoraNFT(
            _name,
            _symbol,
            msg.sender,
            _royaltyFee,
            _royaltyRecipient
        );
        nfts[msg.sender].push(address(nft));
        NFT[address(nft)] = true;
        emit CreatedNFTCollection(msg.sender, address(nft), _name, _symbol);
    }

    function getOwnCollections() external view returns (address[] memory) {
        return nfts[msg.sender];
    }

    function isNFT(address _nft) external view returns (bool) {
        return NFT[_nft];
    }
}
