import React, { useState } from "react"
import "./style.css"
import { useWeb3React } from "@web3-react/core"
import { getContractInstance } from "../../wallet"

const Square = ({ val }) => {
	if (val === "0") val = ""
	else if (val === "1") val = "O"
	else if (val === "2") val = "X"
	return <div className="tictactoe__cell">{val}</div>
}

const Activate = () => {
	const { account } = useWeb3React()

	// CURRENT PLAYER INFO
	const [currAddr, setCurrAddr] = useState(null)
	const [currShape, setCurrShape] = useState(null)
	const currentPlayerAddress = async () => {
		const TicTacToeContractInstance = await getContractInstance()
		const data = await TicTacToeContractInstance.methods
			.currentPlayerAddress()
			.call()
		console.log(data)
		setCurrAddr(data)
		return data
	}
	const currentPlayerShape = async () => {
		const TicTacToeContractInstance = await getContractInstance()
		const data = await TicTacToeContractInstance.methods
			.currentPlayerShape()
			.call()
		if (data === "0") setCurrShape("0")
		else if (data === "1") setCurrShape("O")
		else if (data === "2") setCurrShape("X")
		console.log(data)
		return data
	}

	// RETURN BOARD
	const arr = [
		["0", "0", "0"],
		["0", "0", "0"],
		["0", "0", "0"],
	]
	const [board, setBoard] = useState(arr)
	const returnBoard = async () => {
		const TicTacToeContractInstance = await getContractInstance()
		const data = await TicTacToeContractInstance.methods.returnBoard().call()
		setBoard(data)
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
	const [winnerAddr, setWinnerAddr] = useState(null)
	const [winnerShape, setWinnerShape] = useState(null)
	const getWinnerAddress = async () => {
		const TicTacToeContractInstance = await getContractInstance()
		const data = await TicTacToeContractInstance.methods.winnerAddress().call()
		setWinnerAddr(data)
		console.log(data)
		return data
	}
	const getWinnerShape = async () => {
		const TicTacToeContractInstance = await getContractInstance()
		const data = await TicTacToeContractInstance.methods.winnerSquare().call()
		if (data === "0") setWinnerShape("0")
		else if (data === "1") setWinnerShape("O")
		else if (data === "2") setWinnerShape("X")
		console.log(data)
		return data
	}

	const [row, setRow] = useState("")
	const [col, setCol] = useState("")
	const moveHandler = () => {
		performMove(row, col)
	}

	return (
		<>
			<div className="activatedContainer">activated</div>
			<div className="flexbox">
				<div className="tictactoe">
					{board.map((row, id) => (
						<div className="tictactoe__row" key={id}>
							<Square val={row[0]} />
							<Square val={row[1]} />
							<Square val={row[2]} />
						</div>
					))}
				</div>
				<div className="operations">
					<div className="operations__row">
						<input
							type="text"
							placeholder="row"
							value={row}
							onChange={e => setRow(e.target.value)}
						/>
						<input
							type="text"
							placeholder="col"
							value={col}
							onChange={e => setCol(e.target.value)}
						/>
						<button onClick={moveHandler}>move</button>
					</div>

					<div className="operations__row">
						<button onClick={currentPlayerAddress}>
							Current Player Address
						</button>
						<p>{currAddr}</p>
					</div>

					<div className="operations__row">
						<button onClick={currentPlayerShape}>Current Player Shape</button>
						<p>{currShape}</p>
					</div>

					<div className="operations__row">
						<button onClick={getWinnerAddress}>Winner Address</button>
						<p>{winnerAddr}</p>
					</div>

					<div className="operations__row">
						<button onClick={getWinnerShape}>Winner Shape</button>
						<p>{winnerShape}</p>
					</div>

					<div className="operations__row">
						<button onClick={returnBoard}>Get Board Values</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Activate
