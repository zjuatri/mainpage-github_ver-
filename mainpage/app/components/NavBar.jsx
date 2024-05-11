import Link from "next/link";
import "./NavBar.css"

export default function NavBar() {
    return (
        <div className="NavBody">
            <div className="nav">
                <ul>
                    <li><Link href="/">主页</Link></li>
                    <li><Link href="/introduction">我是谁</Link></li>
                    <li><Link href="/tools">工具</Link></li>
                    <li><Link href="/blog">博客</Link></li>
                    <li><Link href="/friends">友链</Link></li>
                    <div className="nav-box"></div>
                </ul>
            </div>
        </div>
    );
}