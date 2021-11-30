const ABI = [
	{
		constant: true,
		inputs: [],
		name: "winnerSquare",
		outputs: [
			{
				name: "",
				type: "uint8",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{
				name: "xpos",
				type: "uint256",
			},
			{
				name: "ypos",
				type: "uint256",
			},
		],
		name: "performMove",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "returnBoard",
		outputs: [
			{
				name: "",
				type: "uint8[3][3]",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "currentPlayerAddress",
		outputs: [
			{
				name: "",
				type: "address",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "winnerAddress",
		outputs: [
			{
				name: "",
				type: "address",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "currentPlayerShape",
		outputs: [
			{
				name: "",
				type: "uint8",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				name: "_player2",
				type: "address",
			},
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "constructor",
	},
]

export default ABI
