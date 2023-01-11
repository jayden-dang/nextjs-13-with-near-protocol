"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Contract } from "../near-interface";
import { Wallet } from "../near-wallet";

export const Web3Context = createContext(null);

export const CONTRACT_ID = "dev-1672293046853-49717456344735";

function Web3Provider({ children }) {
  const [web3, setWeb3] = useState({
    wallet: null,
    contract: null,
    isSignedIn: null,
    total_Token: null,
  });

  useEffect(() => {
    const loadProvider = async () => {
      const wallet = await new Wallet({
        createAccessKeyFor: CONTRACT_ID,
        network: "testnet",
      });
      const contract = await new Contract({
        contractId: CONTRACT_ID,
        walletToUse: wallet,
      });
      const isSignedIn = await wallet.startUp();
      const total_Token = await contract.getTokenAccount();
      setWeb3({
        wallet,
        contract,
        isSignedIn,
        total_Token,
      });
    };
    loadProvider();
  }, []);

  return <Web3Context.Provider value={web3}>{children}</Web3Context.Provider>;
}

export function useWeb3() {
  return useContext(Web3Context);
}

export default Web3Provider;
