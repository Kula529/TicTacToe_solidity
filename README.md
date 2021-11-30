# Tic Tac Toe Using React and Solidity

## Tech Stack Used

`react` `solidity` `remix` `@web3-react/core` `@web3-react/injected-coinjected-connector` `@ethersproject/providers` `@metamask/detect-provider` `web3`

## References and Process

1. Learn Solidity [here](https://www.youtube.com/playlist?list=PLJ-On9rG7_LR9GlWDbrrcPlE8_cJSUp1s)
2. Create, Compile and Deploy Contract in [Remix](https://remix.ethereum.org/)
3. Save the solidity code, abi, bytecode and contract address. [src/contract](./src/contract)
4. `Web3ReactProvider` component to send the provider
5. Create an `injected` to be able to connect to different networks on etherium
6. Connect and disconnect with the mentioned (in _injected_) etherium networks. Take the `active`, `activate`, `deactivate` functions from `useWeb3React` hook
   - Render appropriate component according to if it is connected or not
7. Call and integrate solidity functions in the activate component
