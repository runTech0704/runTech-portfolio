import React from "react";
import {useState} from "react";

import "./intro.css";

const Intro = () => {
    const [hoverIntroduction, setHoverIntroduction] = useState(false);
    const [hoverIntroduce, setHoverIntroduce] = useState(false)

    const introductionCardStyle = {
        borderRadius: '10px',
        boxShadow: hoverIntroduction ? '0 4px 8px rgba(0, 0, 0, 0.2)' : '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    };

    const introduceCardStyle = {
        borderRadius: '10px',
        boxShadow: hoverIntroduce ? '0 4px 8px rgba(0, 0, 0, 0.2)' : '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    };

    return (
        <>
            <div className="intro-container">

                <div className="card introduction"
                    style={ introductionCardStyle }
                    onMouseEnter={() => setHoverIntroduction(true)}
                    onMouseLeave={() => setHoverIntroduction(false)}
                >
                    <h2>runTechとは</h2>
                    <p>runTech は Author である藤原 聖(さとる)のエンジニア活動をまとめることを目的として作成されたポートフォリオである</p>
                </div>

                <div className="card introduce"
                    style={ introduceCardStyle }
                    onMouseEnter={() => setHoverIntroduce(true)}
                    onMouseLeave={() => setHoverIntroduce(false)}
                >
                    <h2>Author: 藤原 聖</h2>
                    <p>fugafuga</p>
                </div>

            </div>
        </>
    )
};

export default Intro;
