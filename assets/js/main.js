const CANTOADZ_ADDRESS = "0x0697252cf83c9faf3d95d282fd02b58a3500f95c";
const CANTOADZ_ABI = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_earlyBirdSupply",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_earlyBirdMintCount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_baseTokenPrice",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_maxSupply",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_argBaseURI",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "_paymentRecipient",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_royaltyRecipient",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "merkRoot",
        "type": "bytes32"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "ApprovalCallerNotOwnerNorApproved",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ApprovalQueryForNonexistentToken",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "BalanceQueryForZeroAddress",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidQueryRange",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MaxSupplyExceeded",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MintERC2309QuantityExceedsLimit",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MintToZeroAddress",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MintZeroQuantity",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "Nope",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "OwnerQueryForNonexistentToken",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "OwnershipNotInitializedForExtraData",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_expected",
        "type": "uint256"
      }
    ],
    "name": "SentIncorrectEth",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TransferCallerNotOwnerNorApproved",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TransferFromIncorrectOwner",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TransferToNonERC721ReceiverImplementer",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TransferToZeroAddress",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "URIQueryForNonexistentToken",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "fromTokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "toTokenId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "ConsecutiveTransfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "EARLYBIRD_MINT_COUNT",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "EARLYBIRD_SUPPLY",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MAX_SUPPLY",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "baseTokenPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "baseURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountRequested",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "a",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "allegedHolderCount",
        "type": "uint256"
      },
      {
        "internalType": "bytes32[]",
        "name": "merkleProof",
        "type": "bytes32[]"
      }
    ],
    "name": "countForClaimedFree",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountRequested",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "a",
        "type": "address"
      }
    ],
    "name": "earlyBirdEligibleCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "explicitOwnershipOf",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          },
          {
            "internalType": "uint64",
            "name": "startTimestamp",
            "type": "uint64"
          },
          {
            "internalType": "bool",
            "name": "burned",
            "type": "bool"
          },
          {
            "internalType": "uint24",
            "name": "extraData",
            "type": "uint24"
          }
        ],
        "internalType": "struct IERC721A.TokenOwnership",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "tokenIds",
        "type": "uint256[]"
      }
    ],
    "name": "explicitOwnershipsOf",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          },
          {
            "internalType": "uint64",
            "name": "startTimestamp",
            "type": "uint64"
          },
          {
            "internalType": "bool",
            "name": "burned",
            "type": "bool"
          },
          {
            "internalType": "uint24",
            "name": "extraData",
            "type": "uint24"
          }
        ],
        "internalType": "struct IERC721A.TokenOwnership[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "holdersCountCheckers",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isOpen",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "allegedHolderCount",
        "type": "uint256"
      },
      {
        "internalType": "bytes32[]",
        "name": "merkleProof",
        "type": "bytes32[]"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paymentRecipient",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "r1",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "r2",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "r3",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "royaltyAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "salePrice",
        "type": "uint256"
      }
    ],
    "name": "royaltyInfo",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "royaltyRecipient",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_r1",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_r2",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_r3",
        "type": "address"
      }
    ],
    "name": "setAddresses",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_baseTokenPrice",
        "type": "uint256"
      }
    ],
    "name": "setBaseTokenPrice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "newURI",
        "type": "string"
      }
    ],
    "name": "setBaseURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "addresses",
        "type": "address[]"
      }
    ],
    "name": "setHoldersCountCheckers",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "merkRoot",
        "type": "bytes32"
      }
    ],
    "name": "setMerkleRoot",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_paymentRecipient",
        "type": "address"
      }
    ],
    "name": "setPaymentRecipient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_royaltyRecipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_royaltyAmount",
        "type": "uint256"
      }
    ],
    "name": "setRoyaltyInfo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "a",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "c",
        "type": "uint256"
      }
    ],
    "name": "setTotalFreeClaimsCount",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "_interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "toggleOpen",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "toggleUseDebugHoldersList",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "tokensOfOwner",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "start",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "stop",
        "type": "uint256"
      }
    ],
    "name": "tokensOfOwnerIn",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "a",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "allegedHolderCount",
        "type": "uint256"
      },
      {
        "internalType": "bytes32[]",
        "name": "merkleProof",
        "type": "bytes32[]"
      }
    ],
    "name": "totalCombinedFreeMintCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "a",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "allegedHolderCount",
        "type": "uint256"
      },
      {
        "internalType": "bytes32[]",
        "name": "merkleProof",
        "type": "bytes32[]"
      }
    ],
    "name": "totalFreeClaimCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalPaidCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "a",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "count",
        "type": "uint256"
      }
    ],
    "name": "updateEarlyBirdMintsPerAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdrawAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_token",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "withdrawTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
];

const ethers = window.ethers;

// Mainnet addresses
const chainID = `0x1E14`
const chainRPC = 'https://canto.slingshot.finance'


let provider;
let address;
let isConnected = false;
let signer;
let supply = 0;
let amountAllowed = 0;

let isFreeOpen = true;
let isPublicOpen = false;

const priceOfToken = 150

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('connectWallet').addEventListener('click', connectToMetamask);
});

const connectWallet = document.getElementById('connectWallet')
const walletQualification = document.getElementById('walletQualification')
const mintStatus = document.getElementById('mint_status')
const maxSupply = document.getElementById('maxSupply')
const pricePaid = document.getElementById('pricePaid')
const mintBtnsWrap = document.getElementById('mintBtns_wrap')
const supplySpan = document.getElementById('supply')

let discount = 0;
let supplyLeft;
let cantoadzContract;
let apiData;

let provider2, signer2;

const galleryModalWrap = document.getElementById('galleryModal_wrap')
galleryModalWrap.addEventListener('click', (event)=>{
  if(event.target.id === "galleryModal_wrap"){    
    galleryModalWrap.style.display = "none"
  };
})
const galleryBtn = document.getElementById('gallery')
      galleryBtn.addEventListener('click', () => {
        galleryModalWrap.style.display = "flex"
      })

const galleryModalGrid = document.getElementsByClassName('galleryModal_grid')[0]
const galleryCloseBtn = document.getElementsByClassName('galleryModal_exit')[0]
      galleryCloseBtn.addEventListener('click', () => {
        galleryModalWrap.style.display = "none"
      })

async function connectToMetamask(){

  if (!isConnected) {

    if (typeof window.ethereum === 'undefined') {
      showMessage('Please Install Metamask!');
      return
    }

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'})
      .catch((e)=>{ 
        if (error.code === 4001) {
          // EIP-1193 userRejectedRequest error
          showMessage('Please connect to MetaMask.');
        } else {
          showMessage(e.message);
        }
        return
      })

    if (!accounts) { return }

    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainID }],
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (error.code === 4902) {
        try {
          await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{ chainId: chainID, rpcUrl: chainRPC, chainName: 'Canto'}],
          });
        } catch (addError) {
          showMessage(addError)
        }
        showMessage(error.message)
      }
    }
    
    console.log("Hello, Signing in!");

    walletQualification.innerHTML = "Connecting wallet..."
    walletQualification.className = "main_p highlightBtn"

    try {
      provider2 = new ethers.providers.Web3Provider(window.ethereum);
      await provider2.send("eth_requestAccounts", []);
      signer = provider2.getSigner();
      address = await signer.getAddress();
      var shortAddress = address.slice(0,6) + "...";
      connectWallet.innerText = shortAddress;
      connectWallet.className = "nav_button";
      
      isConnected = true;

    } catch (error) {
      isConnected = false;
      showMessage(error.message);
    }

    const chainprovider = new ethers.providers.JsonRpcProvider(chainRPC)
    cantoadzContract = new ethers.Contract(CANTOADZ_ADDRESS, CANTOADZ_ABI, chainprovider);
    
    const totalSupply = await cantoadzContract.totalSupply();
          supplyLeft = parseInt(totalSupply._hex)
          supplySpan.innerText = supplyLeft

    let response = await fetch(`https://chromaflip.com/?address=${address}`);
        apiData = await response.json();

    const getAmountAllowed = await cantoadzContract.totalCombinedFreeMintCount(address, apiData.count, apiData.proof)

    amountAllowed = parseInt(getAmountAllowed._hex).toString()
    
    const myCanToadz = await cantoadzContract.tokensOfOwner(address)

    if(myCanToadz.length > 0){
      galleryBtn.style.display = "flex"
      galleryModalGrid.innerHTML = ""
      const baseTokenURL = "https://pub-78b95bc826c44531b0f119f28908ecee.r2.dev/images/"
      for (let c = 0; c < myCanToadz.length; c++) {
        const mySrcImg = `${baseTokenURL}${parseInt(myCanToadz[c]._hex).toString()}.gif`
        const aTag = document.createElement('a');
              aTag.href = mySrcImg;
              aTag.target = "_blank";
              aTag.className = "galleryImg"
              aTag.dataset.id = `#${parseInt(myCanToadz[c]._hex).toString()}`

              galleryModalGrid.appendChild(aTag)
      
        const myImg = document.createElement('img');
              myImg.src = mySrcImg;
              aTag.appendChild(myImg)
            }
    }

      isFreeOpen = false;
      walletQualification.style.display = "none"

      if(amountAllowed > 0){
        pricePaid.innerText = 150
      } 


    mintBtnsWrap.style.display = "block";

    mintStatus.innerText = "PUBLIC"


  } else {

    console.log("Goodbye, Logging out!");
    connectWallet.className = "nav_button highlightBtn";
    mintBtnsWrap.style.display = "none";

    provider = null;
    signer = null;
    address = null;
    isConnected = false;
    document.getElementById('connectWallet').innerText = "Connect Wallet";
    walletQualification.innerHTML = "Please connect your wallet!"

  }
}


// error message 

const errorModalWrap = document.getElementById('errorModal_wrap')
errorModalWrap.addEventListener('click', ()=>{
  errorModalWrap.style.display = "none";
})
const errorMessage = document.getElementById('errorModal_message')

let cancelModal;
function showMessage(mymessage){
  
  errorModalWrap.style.display = "flex";
  errorMessage.innerHTML = mymessage;
  
  if(cancelModal){
    clearTimeout(cancelModal)
  }  
}

errorModalWrap.addEventListener('click', ()=>{
  errorModalWrap.style.display = "none";
})
const aboutBtn = document.getElementById('about')
const aboutModal = document.getElementById('aboutModal_wrap')

aboutBtn.addEventListener('click', ()=>{
  if(aboutModal.style.display !== "flex"){
    aboutModal.style.display = "flex";
  } else {
    aboutModal.style.display = "none";
  }
})
aboutModal.addEventListener('click', ()=>{
  aboutModal.style.display = "none";
})

// Increments

const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const myincrementvalue = document.getElementById('smallIncr')

let mintPrice = 150
let currentPrice

plus.addEventListener('click', function(){

  let currentNum = myincrementvalue.innerText

    currentNum++
    myincrementvalue.innerText = currentNum

    if(currentNum <= amountAllowed){
      currentPrice = 150;
      pricePaid.innerText = 150
    } else {
      currentPrice = (currentNum - amountAllowed) * mintPrice
      pricePaid.innerText = Math.round(currentPrice * 10) / 10
    }
  

})

minus.addEventListener('click', function(){

  let currentNum = myincrementvalue.innerText;

  if (currentNum != 1) {
    currentNum--;
    myincrementvalue.innerText = currentNum

    if(currentNum <= amountAllowed){
      currentPrice = 0;
      pricePaid.innerText = 0
    } else {
      currentPrice = (currentNum - amountAllowed) * mintPrice
      pricePaid.innerText = Math.round(currentPrice * 10) / 10
    }

  }

});

const mintModalWrap = document.getElementById('mintModal_wrap')
errorModalWrap.addEventListener('click', ()=>{
  errorModalWrap.style.display = "none";
})
const mintingMessage = document.getElementById('mintModal_message')

let mintingMessageLock = false

function showMintMessage(mymessage){
  
  mintModalWrap.style.display = "flex";
  mintingMessage.innerHTML = mymessage;
  
}

function hideMintMessage(){
  mintModalWrap.style.display = "none";
}

const mintBtn = document.getElementById('mintBtn')

mintBtn.addEventListener('click', async () => {
  if(!isConnected){
    showMessage('Please sign in...')
    connectToMetamask()
    return
  }
    showMintMessage('Processing your transaction...')
    let currentNum = myincrementvalue.innerText;
    let priceToPay = +pricePaid.innerText
    
    let myBalance
    await provider2.getBalance(address).then((balance) => {

      myBalance = ethers.utils.formatEther(balance)

    })

    if(myBalance < priceToPay){
      hideMintMessage()
      showMessage(`You don't have enough Canto to mint this`) 
      return
    }
    
    let ethersToWei = ethers.utils.parseUnits(priceToPay.toString(), "ether");

    const myprovider = new ethers.providers.Web3Provider(window.ethereum);
    const mysigner = myprovider.getSigner();

    const chainprovider2 = new ethers.providers.JsonRpcProvider("https://canto.evm.chandrastation.com")
    const cantoadzContract2 = new ethers.Contract(CANTOADZ_ADDRESS, CANTOADZ_ABI, mysigner);

    try{

      const transaction = await cantoadzContract2.mint(currentNum, apiData.count, apiData.proof,{value: ethersToWei})
      await transaction.wait();
      hideMintMessage()
      showMessage("CONGRATULATIONS, you just minted CanToadz!!!!")

      const myCanToadz2 = await cantoadzContract2.tokensOfOwner(address)

      if(myCanToadz2.length > 0){
        galleryBtn.style.display = "flex"
        galleryModalGrid.innerHTML = ""
        const baseTokenURL = "https://pub-78b95bc826c44531b0f119f28908ecee.r2.dev/images/"
        for (let c = 0; c < myCanToadz2.length; c++) {
          const mySrcImg = `${baseTokenURL}${parseInt(myCanToadz2[c]._hex).toString()}.gif`
          const aTag = document.createElement('a');
                aTag.href = mySrcImg;
                aTag.target = "_blank";
                aTag.className = "galleryImg"
                aTag.dataset.id = `#${parseInt(myCanToadz2[c]._hex).toString()}`
  
                galleryModalGrid.appendChild(aTag)
        
          const myImg = document.createElement('img');
                myImg.src = mySrcImg;
                aTag.appendChild(myImg)
              }
      }
      
    } catch (error){
      console.log(error);
      showMessage(error.message)
      hideMintMessage()
    }
})


const asciiArray="❀.⫯.⫯❀".split('')

const itemsToShuffle = document.getElementsByClassName("shuffle")
for (let m = 0; m < itemsToShuffle.length; m++) {
  itemsToShuffle[m].addEventListener('mouseover',shuffleLetter)
}
function shuffleLetter (ev){
  
  const originalLetter = ev.target.dataset.l;

  let i = 0


  let id = setInterval(function(){
      if(i >= asciiArray.length) {
        ev.target.innerText = originalLetter
          clearInterval(id);
          return;
      }
      ev.target.innerText = asciiArray[i]
      i++;

  }, 80)

}
const featuredItem = document.getElementById('featuredItem')

let featureCount = 1;

setInterval(() => {

  if(featureCount < 8){
    featuredItem.src = `/assets/images/${featureCount}.gif`

    featureCount += 1
  } else {
    featuredItem.src = "/assets/images/1.gif"
    featureCount = 1
  }

}, 800);
