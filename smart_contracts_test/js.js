
// Function to add two variables.
 
const add = (a, b) => {
    return a + b
}
 
console.log(add(4, 6))

var Web3 = require("web3")
const web3 = new Web3("https://cloudflare-eth.com")

web3.eth.getBlockNumber(function (error, result) {
  console.log(result)
})


async function getBlockNumber() {
  const latestBlockNumber = await web3.eth.getBlockNumber()
  console.log(latestBlockNumber)

  /*
  if (window.ethereum != null) {
    state.web3 = new Web3(window.ethereum)
    try {
      // Request account access if needed
      await window.ethereum.enable()
      // Acccounts now exposed
    } catch (error) {
      // User denied account access...
    }
  }
  */
  return latestBlockNumber
}

getBlockNumber()

