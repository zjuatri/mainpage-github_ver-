import Link from "next/link";
import "./blog.css"
import blog_data from "./blog_data.json"
import { Fragment } from "react";

export default function notes(){
    const data = blog_data.information;
    return(
<div className="body">
    <div className="b_box">
        {data.map(function(item,index){
            return(
                <div key={index}>
                    <Link className="a_box" href={item.url}><div className="a_title">
                        {"["+item.type+"]"+item.title}
                        </div>
                        <div className="a_date">
                            {item.date}
                            </div>
                        </Link>
                </div>
            )
        })}
    </div>
</div>
    );
}