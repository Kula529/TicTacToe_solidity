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
			<h1 className="header">TIC TAC TOE</h1>
			{active ? (
				<>
					<Activate />
					<button onClick={disconnect} className="cta_btn">
						DISCONNECT
					</button>
				</>
			) : (
				<>
					<Deactivate />
					<button onClick={connect} className="cta_btn">
						CONNECT
					</button>
				</>
			)}
		</>
	)
}

export default App
