# tomochain-box

A truffle box to easily start with smart contract deployment on TomoChain.

Testnet and Mainnet networks aswell as the 10 TOMO deployment fee are already configured.

# Usage

Install truffle.

```
npm install -g truffle
```

Open that truffle box.

```
truffle unbox etienne-napoleone/tomochain-box
```

Add your mnemonic to the `.mnemonic` file.


**Attention:** A gitignore is automatically created to ignore the `.mnemonic` file. Please be careful to never version it!


You can then develop your smart contract and use truffle with usual commands directly on TomoChain.
