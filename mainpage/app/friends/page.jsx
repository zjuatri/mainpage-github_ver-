import friends_data from "./friends_data.json"
import "./friends.css"
import Image from "next/image";
import Link from "next/link";

export default async function friends() {
    const data = friends_data.information;
    return (
        <div className="body">
            <div className="f_container">
                {data.map(function (item, index) {
                    return (<div className="f_box" key={index}>
                        <div className="f_box2">
                            <Link href={item.url}>
                                <img
                                    className="f_icon"
                                    alt={item.title}
                                    src={item.src}>
                                </img>
                            </Link>
                        </div>
                    </div>);
                })}
            </div>
            <div className="f_intro">
                
            </div>
        </div>
    );
}

