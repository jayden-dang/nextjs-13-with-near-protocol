"use client";

import { useEffect, useState } from "react";
import { useWeb3 } from "../context/Web3Provider";

const Header = () => {
  const { wallet, contract, isSignedIn, total_Token } = useWeb3();
  console.log(total_Token);

  return (
    <div>
      {isSignedIn ? (
        <>
          <button>{wallet.accountId}</button>
          <button onClick={() => wallet.signOut()}>Sign Out</button>
        </>
      ) : (
        <button onClick={() => wallet.signIn()}>Connect</button>
      )}
    </div>
  );
};

export default Header;
