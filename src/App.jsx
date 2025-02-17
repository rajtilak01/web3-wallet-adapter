import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';
// import { SendTokens } from './SendTokens';
// import { SignMessage } from './SignMessage';
import Airdrop from './components/Airdrop';

function App() {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
      <ConnectionProvider endpoint={import.meta.env.VITE_RPC_URL}>
      {/* <ConnectionProvider endpoint={"https://api.devnet.solana.com"}> */}
          <WalletProvider wallets={[]} autoConnect>
              <WalletModalProvider>
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                  <WalletMultiButton />
                  <WalletConnectButton/>
                  <WalletDisconnectButton />
                </div>
                {/* <RequestAirdrop />
                <ShowSolBalance /> */}
                {/* <Tokens /> */}
                <Airdrop/>
                {/* <SignMessage />
                <SendTokens /> */}
              </WalletModalProvider>
          </WalletProvider>
      </ConnectionProvider>
  );
}

export default App