import React from "react";
import star from "./Star.png";

export default function Card(props) {
  let badgeText
  if (props.openSpots === 0){
    badgeText = "SOLD OUT"
  }else if(props.location === "Online"){
    badgeText = "ONLINE"
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      {props.location === 'Online' && <div className="card--badge">{badgeText}</div>}
      <img src={require(`../images/${props.coverImg}`)} alt="card" className="card--image" />
     <div className="card--stats">
        <img src={star} className="card-star" alt="star" />
        <span>{props.stats.rating}</span>
        <span className="grey">({props.stats.reviewCount}) • </span>
        <span className="grey">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
