import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import "./head.css"
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "zjuatri's homepage",
  description: "zjuatri's homepage",
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
        <footer className="footer">
          <div className="social_media">
          <Link href={"https://www.zhihu.com/people/wztsxyh"}>
          <Image
          className="social_icon"
          alt="知乎"
          src={"/zhihu.svg"}
          width={50}
          height={50}
          />
          </Link>
          <Link href={"https://github.com/zjuatri"}>
          <Image
          className="social_icon"
          alt="github"
          src={"/github.svg"}
          width={50}
          height={50}
          />
          </Link>
          <Link href={"https://space.bilibili.com/498525616"}>
            <Image
            className="social_icon"
            alt="bilibili"
            src={"/bilibili.svg"}
            width={50}
            height={50}></Image>
          </Link>
          </div>
          <div className="copyright">
            <span>©2024 by zjuatri</span>
          </div>
        </footer>
      </body>

    </html>
  );
}


