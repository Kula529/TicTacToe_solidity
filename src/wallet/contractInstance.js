import Web3 from "web3"
import { ABI, contractAddress } from "../contract"
import detectEthereumProvider from "@metamask/detect-provider"

const getContractInstance = async () => {
	const provider = await detectEthereumProvider()
	const web3 = new Web3(provider)
	const TicTacToeContractInstance = new web3.eth.Contract(ABI, contractAddress)
	return TicTacToeContractInstance
}

export default getContractInstance
