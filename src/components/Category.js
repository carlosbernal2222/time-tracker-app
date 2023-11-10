import ellipsis from "../images/icon-ellipsis.svg"

export default function Category(props){
    const divStyle ={
        backgroundColor : props.item.bgColor,
    }

    console.log(typeof(props.item.coverIcon))

    return(
        <div className="category--container" style={divStyle}>
            <div className="category--top" >
                <img src={require(`../images/${props.item.coverIcon}`).default} className="category--top__icon"/>
            </div>
            <div className="category--bottom">
                <div className="category--bottom__top">
                    <p>{props.item.title}</p>
                    <img src={ellipsis} className="ellipsis"/>
                </div>
                <div className="category--bottom__bottom">
                    <p id="current--time">{props.item.timeframes.weekly.current}hrs</p>
                    <p>Last Week - {props.item.timeframes.weekly.previous}hrs</p>
                </div>
            </div>
        </div>
    )
}