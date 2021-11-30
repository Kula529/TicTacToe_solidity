import React from "react"
import { useWeb3React } from "@web3-react/core"
// import detectEthereumProvider from "@metamask/detect-provider"
// import Web3 from "web3"
import { getContractInstance } from "../../wallet"
// import { ABI, contractAddress } from "../../contract"

const Activate = () => {
	const { account } = useWeb3React()

	const performMove = async (row, col) => {
		// const provider = await detectEthereumProvider()
		// const web3 = new Web3(provider)
		// const TicTacToeContractInstance = new web3.eth.Contract(
		// 	ABI,
		// 	contractAddress
		// )
		const TicTacToeContractInstance = await getContractInstance()
		const receipt = await TicTacToeContractInstance.methods
			.performMove(row, col)
			.send({ from: account })
		console.log(receipt)
		return receipt
	}

	return (
		<div>
			<span>activated</span>
			<button onClick={() => performMove(1, 0)}>SET MESSAGE USING THIS</button>
		</div>
	)
}

export default Activate
