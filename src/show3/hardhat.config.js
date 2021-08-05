/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const {ALCHEMY_KEY, WALLET_PRIVATE_KEY} = process.env;

module.exports = {
    // I'm going to use the last version of solidity compiler
    solidity: "0.8.6",
    defaultNetwork: "rinkeby",
    networks: {
        hardhat: {},
        rinkeby: {
            url: ALCHEMY_KEY,
            accounts: [`${WALLET_PRIVATE_KEY}`]
        }
    },
}