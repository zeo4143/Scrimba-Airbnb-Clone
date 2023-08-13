import React from "react";

export default function Card(props) {

    let badgetext

    if(props.openSpots === 0) {
        badgetext = "SOLD OUT"
    } else if (props.location === "Online") {
        badgetext = "Online"
    } 
    return(

        
        <div className="cardHolder">
            {badgetext && <div className="card--badge">{badgetext}</div>}
            <img src={`./images/${props.coverImg}`} className="card--img"/>

            <div className="content">
                <img src="./images/Star1.png" className="conetent--img" />
                <span>{props.stats.rating}</span>
                <span>({props.stats.reviewCount})  • </span>
                <span>{props.location}</span>
            </div>
                <p>{props.title}</p>
                <p><span className="card--text">From ${props.price}</span> / person</p>
        </div>
    )
}