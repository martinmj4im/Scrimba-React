import React from "react";
import group77 from "./Group-77.png"

export default function Hero(){
    return(
        <section className="Hero">
            <img src={group77} className="collage" alt="collage of experiences"/>
            <h1 className="title">
                Online Experiences
            </h1>
            <p className="desc">
                Join unique interactive activities led by one-of-a-kind hosts-all without leaving home
            </p>
        </section>
    )
}