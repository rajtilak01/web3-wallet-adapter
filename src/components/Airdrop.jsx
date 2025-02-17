import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";

export default function Airdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  const [amount, setAmount] = useState("");

  async function sendAirdropToUser() {
    // console.log("amount changed again", amount);
    await connection.requestAirdrop(wallet.publicKey, parseInt(amount) * 1000000000);
    alert("Airdropped succeeded")
  }
  return (
    <div>
      {wallet.publicKey ? (
        <h1>Hello {wallet.publicKey.toString()}</h1>
      ) : (
        <h1>Please connect your wallet</h1>
      )}
      <input
        type="text"
        placeholder="Amount"
        onChange={(e) => {
          setAmount(e.target.value);
        }}
        value={amount}
      ></input>
      <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
  );
}
