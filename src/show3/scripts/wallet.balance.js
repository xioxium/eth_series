// requires
const web3 = require('web3')
require('dotenv').config()

// import the env keys
const {ALCHEMY_KEY, WALLET_ADDRESS} = process.env;

let xioxiumBalance = new web3(ALCHEMY_KEY);

// let get the Promise into the variable "balance"
let balance = xioxiumBalance.eth.getBalance(WALLET_ADDRESS);

// wait a second and kaboom!
balance.then((balanceWei)=>{
    // the default response comes in Wei, we convert it to ETH
    let balanceETH = web3.utils.fromWei(balanceWei) + ' ETH'
    console.log(balanceETH)
}).catch((error)=>{ // maybe occur an error
    console.log(error)
})