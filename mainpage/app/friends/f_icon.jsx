import "./friends.css"
import Link from "next/link"

export default function Ficon(props) {
    const item = props.item;
    const index = props.index;
    const rerender = props.rerender;

    function showInfo() {
        rerender(index);
    }

    function hideInfo() {
        rerender(-1);
    }


    return (
        <div className="f_box2" onMouseEnter={showInfo} onMouseLeave={hideInfo}>
            <Link href={item.url}>
                <img
                    className="f_icon"
                    alt={item.title}
                    src={item.src}>
                </img>
            </Link>
        </div>
    )

}