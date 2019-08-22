const fs = require('fs');
const mnemonic = fs.readFileSync(".mnemonic").toString().trim();

module.exports = {

  networks: {
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, "https://testnet.tomochain.com", 0, 1, true, "m/44'/889'/0'/0/"),
      network_id: "89",
      gas: 5000000,
      gasPrice: 10000000000000,
    },
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, "https://rpc.tomochain.com", 0, 1, true, "m/44'/889'/0'/0/"),
      network_id: "88",
      gas: 5000000,
      gasPrice: 10000000000000,
    },
  },

  compilers: {
    solc: {
      version: "0.4.26",  // TomoChain highest supported solc version
    }
  }

}
