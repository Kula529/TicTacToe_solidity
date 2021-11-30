import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Web3Provider } from "@ethersproject/providers"
import { Web3ReactProvider } from "@web3-react/core"

const getLibrary = provider => {
	const library = new Web3Provider(provider)
	library.pollingInterval = 12000
	return library
}

ReactDOM.render(
	<Web3ReactProvider getLibrary={getLibrary}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Web3ReactProvider>,
	document.getElementById("root")
)
