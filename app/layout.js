import Providers from "../context/Providers";
import Header from "./header";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
