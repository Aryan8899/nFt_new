import { ethers } from "ethers";
import { useState } from "react";
import api from "./nft.json";

const cybermonadd = "0x1e86985BC8eDd8aCEb1FdF25e99923024c63A048";

const Buy = ({ accounts }) => {
  const account = Boolean(accounts[1]);

  async function mintNFT(tokenURI, recipient) {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(cybermonadd, api.abi, signer);
        console.log(contract);
        const network = await window.ethereum.networkVersion;
console.log("Connected network:", network);


        const tx = await contract.mint(tokenURI, recipient);
        // You can handle the transaction success here
        console.log("Transaction successful:", tx);
      } catch (error) {
        // Handle errors gracefully
        console.error("Error minting NFT:", error);
        // You can add additional error handling or display error messages
      }
    } else {
      console.error("Metamask not detected.");
      // You can inform the user that Metamask is not detected
    }
  }

  return (
    <div>
      <p>Welcome! Here you can buy an NFT. Enjoy!</p>
      {account && (
        <button
          onClick={() =>
            mintNFT(
              "https://emerald-deliberate-mink-4.mypinata.cloud/ipfs/QmQ76crGYjAFdQ7sDycZSizdfXrCJEsBpJ9rybBWd97nX3",
              accounts[1]
            )
          }
        >
          Mint NFT
        </button>
      )}
    </div>
  );
};

export default Buy;
