export const nftAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "approve",
    inputs: [
      { name: "to", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getApproved",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isApprovedForAll",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      { name: "operator", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "nextTokenId",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "ownerOf",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeMint",
    inputs: [{ name: "minter", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
      { name: "data", type: "bytes", internalType: "bytes" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setApprovalForAll",
    inputs: [
      { name: "operator", type: "address", internalType: "address" },
      { name: "approved", type: "bool", internalType: "bool" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [{ name: "interfaceId", type: "bytes4", internalType: "bytes4" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tokenURI",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "approved",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ApprovalForAll",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "operator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      { name: "approved", type: "bool", indexed: false, internalType: "bool" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "BatchMetadataUpdate",
    inputs: [
      {
        name: "_fromTokenId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "_toTokenId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "MetadataUpdate",
    inputs: [
      {
        name: "_tokenId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NFTMinted",
    inputs: [
      { name: "_to", type: "address", indexed: true, internalType: "address" },
      {
        name: "_tokenId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      { name: "from", type: "address", indexed: true, internalType: "address" },
      { name: "to", type: "address", indexed: true, internalType: "address" },
      {
        name: "tokenId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "ERC721IncorrectOwner",
    inputs: [
      { name: "sender", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
      { name: "owner", type: "address", internalType: "address" },
    ],
  },
  {
    type: "error",
    name: "ERC721InsufficientApproval",
    inputs: [
      { name: "operator", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC721InvalidApprover",
    inputs: [{ name: "approver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC721InvalidOperator",
    inputs: [{ name: "operator", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC721InvalidOwner",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC721InvalidReceiver",
    inputs: [{ name: "receiver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC721InvalidSender",
    inputs: [{ name: "sender", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC721NonexistentToken",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
  },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
  },
] as const;

export const ballotsAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "ballotNFTAddress", type: "address", internalType: "address" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "ballotCount",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "ballotNFT",
    inputs: [],
    outputs: [
      { name: "", type: "address", internalType: "contract BallotNFT" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "ballots",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [
      { name: "id", type: "uint256", internalType: "uint256" },
      { name: "owner", type: "address", internalType: "address" },
      { name: "title", type: "string", internalType: "string" },
      { name: "description", type: "string", internalType: "string" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "castBallot",
    inputs: [
      { name: "ballotId", type: "uint256", internalType: "uint256" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
      { name: "avt", type: "uint256", internalType: "uint256" },
      { name: "choice", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "create",
    inputs: [
      { name: "title", type: "string", internalType: "string" },
      { name: "description", type: "string", internalType: "string" },
      { name: "choices", type: "string[]", internalType: "string[]" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getBallot",
    inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct BallotContract.Ballot",
        components: [
          { name: "id", type: "uint256", internalType: "uint256" },
          { name: "owner", type: "address", internalType: "address" },
          { name: "title", type: "string", internalType: "string" },
          { name: "description", type: "string", internalType: "string" },
          { name: "choices", type: "string[]", internalType: "string[]" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getBallots",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct BallotContract.Ballot[]",
        components: [
          { name: "id", type: "uint256", internalType: "uint256" },
          { name: "owner", type: "address", internalType: "address" },
          { name: "title", type: "string", internalType: "string" },
          { name: "description", type: "string", internalType: "string" },
          { name: "choices", type: "string[]", internalType: "string[]" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getResults",
    inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "uint256[]", internalType: "uint256[]" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getTokensByOwner",
    inputs: [{ name: "tokenOwner", type: "address", internalType: "address" }],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct BallotContract.TokenInfo[]",
        components: [
          { name: "tokenId", type: "uint256", internalType: "uint256" },
          {
            name: "avt",
            type: "tuple",
            internalType: "struct BallotContract.AVT",
            components: [
              { name: "isIssued", type: "bool", internalType: "bool" },
              { name: "ballotId", type: "uint256", internalType: "uint256" },
              { name: "hasVoted", type: "bool", internalType: "bool" },
              { name: "timestamp", type: "uint256", internalType: "uint256" },
              { name: "expiredAt", type: "uint256", internalType: "uint256" },
            ],
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isClosed",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "issueAVT",
    inputs: [
      { name: "tokenId", type: "uint256", internalType: "uint256" },
      { name: "ballotId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "issuedAVTs",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [
      { name: "isIssued", type: "bool", internalType: "bool" },
      { name: "ballotId", type: "uint256", internalType: "uint256" },
      { name: "hasVoted", type: "bool", internalType: "bool" },
      { name: "timestamp", type: "uint256", internalType: "uint256" },
      { name: "expiredAt", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "mintBallotNFT",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "results",
    inputs: [
      { name: "", type: "uint256", internalType: "uint256" },
      { name: "", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "AVTCreated",
    inputs: [
      { name: "avt", type: "uint256", indexed: false, internalType: "uint256" },
      {
        name: "info",
        type: "tuple",
        indexed: false,
        internalType: "struct BallotContract.AVT",
        components: [
          { name: "isIssued", type: "bool", internalType: "bool" },
          { name: "ballotId", type: "uint256", internalType: "uint256" },
          { name: "hasVoted", type: "bool", internalType: "bool" },
          { name: "timestamp", type: "uint256", internalType: "uint256" },
          { name: "expiredAt", type: "uint256", internalType: "uint256" },
        ],
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "BallotCreated",
    inputs: [
      {
        name: "ballot",
        type: "tuple",
        indexed: false,
        internalType: "struct BallotContract.Ballot",
        components: [
          { name: "id", type: "uint256", internalType: "uint256" },
          { name: "owner", type: "address", internalType: "address" },
          { name: "title", type: "string", internalType: "string" },
          { name: "description", type: "string", internalType: "string" },
          { name: "choices", type: "string[]", internalType: "string[]" },
        ],
      },
    ],
    anonymous: false,
  },
] as const;
