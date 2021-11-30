import "./App.css"
import { injected } from "./wallet"
import { useWeb3React } from "@web3-react/core"
import { Activate, Deactivate } from "./components"

function App() {
	const { active, activate, deactivate } = useWeb3React()

	const connect = async () => {
		try {
			await activate(injected)
		} catch (ex) {
			console.log(ex)
		}
	}

	const disconnect = async () => {
		try {
			await deactivate()
		} catch (ex) {
			console.log(ex)
		}
	}

	return (
		<>
			<button onClick={connect}>CONNECT!!</button>
			{active ? <Activate /> : <Deactivate />}
			<button onClick={disconnect}>DISCONNECT!!</button>
			<div className="App">APP</div>
		</>
	)
}

export default App
