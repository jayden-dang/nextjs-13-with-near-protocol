"use client";

import { ThemeProvider } from "next-themes";
import Web3Provider from "./Web3Provider";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class">
      <Web3Provider>{children}</Web3Provider>;
    </ThemeProvider>
  );
}
