import React from "react";
import "./cards.css";

const Cards = () => {
    return (
        <div className="cards-container">
                <h1>Cards components</h1>
                <div class="cards">
                    <div class="card red">
                        <p class="tip">Hover Me</p>
                        <p class="second-text">Lorem Ipsum</p>
                    </div>
                    <div class="card blue">
                        <p class="tip">Hover Me</p>
                        <p class="second-text">Lorem Ipsum</p>
                    </div>
                    <div class="card green">
                        <p class="tip">Hover Me</p>
                        <p class="second-text">Lorem Ipsum</p>
                    </div>
                </div>
        </div>
    )
};

export default Cards;
