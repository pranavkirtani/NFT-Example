require("@nomiclabs/hardhat-waffle");



const RINKEBY_PRIVATE_KEY = "";



task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/{infura_token}`,
      accounts: [`${RINKEBY_PRIVATE_KEY}`]
    }
  }
};
