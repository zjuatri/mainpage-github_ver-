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
    </div>
  );
}
