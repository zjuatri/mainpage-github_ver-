import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import "./head.css"
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "zjuatri's mainpage",
  description: "zjuatri's mainpage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="head">
            <Image
              className="icon"
              alt="icon"
              src={"/icon.jpeg"}
              width={50}
              height={50}>
            </Image>
            <span className="title">zjuatri的主页</span>
          </div>
        <div className="header">

          <div className="NavBar">
            <NavBar />
          </div>
        </div>
        {children}
      </body>

    </html>
  );
}


