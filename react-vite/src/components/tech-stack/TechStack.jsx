import React, { useState } from "react";
import "./tech-stack.css";


const TechStack = () => {

    return (
        <div className="tech-stack-container">
            <h1>Tech Stack</h1>
            <div class="stack-card-container">
                <div class="stack-card stack-blue">
                    <div class="img-content">
                        <img src="../../../public/tech-stack/icons8-python-144.png" alt="python" />
                    </div>
                    <div class="stack-content">
                        <p class="stack-heading">Card Hover</p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipii
                        voluptas ten mollitia pariatur odit, ab
                        minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                        necessitatibus dignissimos molestias.
                        </p>
                    </div>
                </div>
            </div>
            <div class="stack-card-container">
                <div class="stack-card stack-green">
                    <div class="img-content">
                        <img src="../../../public/tech-stack/icons8-ジャンゴ-192.png" alt="python" />
                    </div>
                    <div class="stack-content">
                        <p class="stack-heading">Card Hover</p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipii
                        voluptas ten mollitia pariatur odit, ab
                        minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                        necessitatibus dignissimos molestias.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default TechStack;
