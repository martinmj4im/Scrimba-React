import React from "react";
import swimmerCard from "./swimmerCard.png";
import star from "./Star.png";

export default function Card() {
  return (
    <div className="card">
      <img src={swimmerCard} alt="katy swimmer" className="card-image" />
      <div className="stats">
        <img src={star} className="card-star" alt="star" />
        <span>5.0</span>
        <span className="grey">(6) • </span>
        <span className="grey">USA</span>
      </div>
      <p>Life lessons with Katie Zafares</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
