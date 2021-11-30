# Tic Tac Toe Using React and Solidity

## Dependencies Used

`react` `solidity` `remix` `@web3-react/core` `@web3-react/injected-coinjected-connector` `@ethersproject/providers` `@metamask/detect-provider` `web3`

## References and Process

1. Learn Solidity [here](https://www.youtube.com/playlist?list=PLJ-On9rG7_LR9GlWDbrrcPlE8_cJSUp1s)
2. Create, Compile and Deploy Contract in [Remix](https://remix.ethereum.org/)
3. Save the solidity code, abi, bytecode and contract address. [src/contract](./src/contract)
4. Connect Users to MetaMask from React [Refer here](https://www.youtube.com/watch?v=DCA53Go5ON8&t=105s)
5. `Web3ReactProvider` component to send the provider
6. Create an `injected` to be able to connect to different networks on etherium
7. Connect and disconnect with the mentioned (in _injected_) etherium networks. Take the `active`, `activate`, `deactivate` functions from `useWeb3React` hook
   - Render appropriate component according to if it is connected or not
8. Call and integrate solidity functions in the activate component

## Some Important Tool Links

1. [Remix](https://remix.ethereum.org/)
   - to create, compile and deploy contract
2. [Rinkeby Etherscan](https://rinkeby.etherscan.io/)
   - to view the address where your contract is deployed
3. [Metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)
   - chrome extension to keep track of
4. [Etherium Unit Convertor](https://eth-converter.com/)
   - to convert between different units of etherium
