import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "./components/Header";
import main from "./../styles/main.module.scss"

const roboto = Roboto({ subsets: ["latin"], weight:["300", "400", "500", "700", "900"] });

export const metadata: Metadata = {
  title: "MoviesFind",
  description: "Generated by Oscar Giraldo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        
        <div className={main.firstcontainer}>
          {/* Components */}
          <Header></Header>
          <Providers>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
