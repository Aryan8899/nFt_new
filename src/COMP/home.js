import React from "react";

const Home = ({ accounts, setAccounts }) => {
   
    const isConnected = Boolean(accounts[0]);

    async function connectedAccounts() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts); // Corrected function name
        }
    }

    return (
        <div >
            {/*left side */}
            <div>Facebook</div>
            <div>Twitter</div>
            <div>Email</div>

            {isConnected ? (
                <p>Connected</p>
            ) : (
                <button onClick={connectedAccounts}>Connect</button> 
            )}

            <h1>CRAFT MONKEYS</h1>
            <p>A platform where you can buy NFTs. Enjoy!</p>
        </div>
    );
}

export default Home;
