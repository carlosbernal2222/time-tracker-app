
import profileImage from "../images/image-jeremy.png"
import React from "react";

export default function Report({onTimeframeChange}){
    return(
        <div className="report--container">
            <div id="report--top">
                <img className="report--person__image" src={profileImage} alt="jeremy profile image" />
                <div className="report--header__text">
                    <p>Report for</p>
                    <p id="report--person__name">Jeremy Robson</p>
                </div>
            </div>
            <div id="report--bottom">
                <button onClick={()=>onTimeframeChange('daily')} className="report--bottom__btn">Daily</button>
                <button onClick={()=>onTimeframeChange('weekly')} className="report--bottom__btn">Weekly</button>
                <button onClick={()=>onTimeframeChange('monthly')} className="report--bottom__btn">Monthly</button>
            </div>
        </div>
    );
}