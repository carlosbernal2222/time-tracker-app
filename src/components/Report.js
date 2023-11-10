
import profileImage from "../images/image-jeremy.png"
import React, {useState} from "react";

export default function Report(){
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
                <button  className="report--bottom__btn">Daily</button>
                <button  className="report--bottom__btn">Weekly</button>
                <button  className="report--bottom__btn">Monthly</button>
            </div>
        </div>
    )
}