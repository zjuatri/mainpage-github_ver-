import Image from "next/image";
import "./mainpage.css"
import Link from "next/link";

export default function Home() {

  return (
    <div className="body">
      <div className="main_box">
      <Image
        className="background"
        alt="background"
        src={"/bg.png"}
        width={2560}
        height={800}
        />

      <Image
        className="jp"
        alt="沈みゆく世界で、君をみつけた。"
        src={"/jp_txt.png"}
        width={100}
        height={302}
        />
        <div className="character"></div>
        </div>
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
    </div>
  );
}
