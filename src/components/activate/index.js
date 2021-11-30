import React from "react"
import { useWeb3React } from "@web3-react/core"
import { getContractInstance } from "../../wallet"

const Activate = () => {
	const { account } = useWeb3React()

	// CURRENT PLAYER INFO
	const currentPlayerAddress = async () => {
		const TicTacToeContractInstance = await getContractInstance()
		const data = await TicTacToeContractInstance.methods
			.currentPlayerAddress()
			.call()
		console.log(data)
		return data
	}
	const currentPlayerShape = async () => {
		const TicTacToeContractInstance = await getContractInstance()
		const data = await TicTacToeContractInstance.methods
			.currentPlayerShape()
			.call()
		console.log(data)
		return data
	}

	// RETURN BOARD
	const returnBoard = async () => {
		const TicTacToeContractInstance = await getContractInstance()
		const data = await TicTacToeContractInstance.methods.returnBoard().call()
		console.log(data)
		return data
	}

	// MOVEMENT FUNCTION
	const performMove = async (row, col) => {
		const TicTacToeContractInstance = await getContractInstance()
		const receipt = await TicTacToeContractInstance.methods
			.performMove(row, col)
			.send({ from: account })
		console.log(receipt)
		return receipt
	}

	// WINNER INFO
	const winnerAddress = async () => {
		const TicTacToeContractInstance = await getContractInstance()
		const data = await TicTacToeContractInstance.methods.winnerAddress().call()
		console.log(data)
		return data
	}
	const winnerShape = async () => {
		const TicTacToeContractInstance = await getContractInstance()
		const data = await TicTacToeContractInstance.methods.winnerSquare().call()
		console.log(data)
		return data
	}

	return (
		<div>
			<span>activated</span>
			<button onClick={() => performMove(1, 0)}>SET MESSAGE USING THIS</button>
			<button onClick={currentPlayerAddress}>currentPlayerAddress</button>
			<button onClick={currentPlayerShape}>currentPlayerShape</button>
			<button onClick={returnBoard}>returnBoard</button>
			<button onClick={winnerAddress}>winnerAddress</button>
			<button onClick={winnerShape}>winnerShape</button>
		</div>
	)
}

export default Activate
