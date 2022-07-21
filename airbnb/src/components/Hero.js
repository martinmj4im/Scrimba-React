import React from "react";
import group77 from "./Group-77.png"

export default function Hero(){
    return(
        <section className="Hero">
            <img src={group77} className="hero--photo" alt="collage of experiences"/>
            <h1 className="hero--header">
                Online Experiences
            </h1>
            <p className="hero--text">
                Join unique interactive activities led by one-of-a-kind hosts-all without leaving home
            </p>
        </section>
    )
}