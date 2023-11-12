import ellipsis from "../images/icon-ellipsis.svg"
import React from "react"

export default function Category({item, timeframe}){
    const divStyle ={
        backgroundColor : item.bgColor,
    }

    const coverIcon ={
        img: "../images/icon-work.svg"
    }



   const getTimeframeText = () => {
        switch(timeframe) {
            case 'daily':
                return 'Yesterday';
            case 'weekly':
                return 'Last Week';
            case 'monthly':
                return 'Last Month';
            default:
                return 'Previously';
        }
    }; 

    return(
        <div className="category--container" style={divStyle}>
            <div className="category--top" >
                <img src="" className="category--top__icon"/>
            </div>
            <div className="category--bottom">
                <div className="category--bottom__top">
                    <p>{item.title}</p>
                    <img src={ellipsis} className="ellipsis"/>
                </div>
                <div className="category--bottom__bottom">
                    <p id="current--time">{item.timeframes[timeframe].current}hrs</p>
                    <p>{getTimeframeText()} - {item.timeframes[timeframe].previous}hrs</p>
                </div>
            </div>
        </div>
    )
}