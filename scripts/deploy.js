const hre = require("hardhat");

const tokens = (nToken) => {
    return ethers.utils.parseUnits(nToken.toString(), "ether");

};


async function main(){
//DEPLOY TOKEN CONTRACT

const _initialSupply = tokens(2000000000000);

const Mudrafi = await hre.ethers.getContractFactory(
    "Mudrafi"
);

const mudrafi = await Mudrafi.deploy(_initialSupply);

await mudrafi.deployed();

console.log('Mudrafi:' ,mudrafi.address);

//token sale contract

const _tokenPrice = tokens(1);

const TokenSale = await hre.ethers.getContractFactory("TokenSale");
const tokenSale = await  TokenSale.deploy(
    mudrafi.address,
    _tokenPrice
);
await tokenSale.deployed();
console.log('TokenSale: ',tokenSale.address);



}

main().catch((error) =>{
    console.error(error);
    process.exitCode = 1;
})
