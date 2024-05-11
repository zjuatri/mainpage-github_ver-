"use client"
import "./friends.css"
import { Fragment, useState } from "react";
import friends_data from "./friends_data.json"
import Ficon from "./f_icon";


export default function friends() {
    const data = friends_data.information;
    const [content,setContent] = useState()

    function rerender(index) {
        if(index == -1){
            setContent()
        }
        else{
            const friend = data[index];
            setContent(
                <Fragment>
                <img
                className="i_icon"
                src={friend.src}
                alt={friend.alt}/>
            <div className="i_title">
                {friend.title}
            </div>
            <div className="i_text">{friend.text}</div>
            </Fragment>);
        }
    }

    return (
        <div className="f_body">
            <div className="f_container">
                {data.map(function (item, index) {
                    return (<div className="f_box" key={index}>
                        <Ficon
                            item={item}
                            index={index}
                            rerender={rerender}
                        />
                    </div>);
                })}
            </div>
            <div className="f_intro">
                {content}
            </div>
        </div>
    );
}

