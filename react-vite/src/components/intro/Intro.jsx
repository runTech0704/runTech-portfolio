import React from "react";
import {useState} from "react";

import IntroduceSection from "./IntroduceSection";
import introImg from "../../image/intro.jpeg";
import "./intro.css";

const Intro = () => {
    const [hoverIntroduction, setHoverIntroduction] = useState(false);

    const introductionCardStyle = {
        borderRadius: '10px',
        boxShadow: hoverIntroduction ? '8px 12px rgba(0, 0, 0, 0.2)' : '0 2px 4px rgba(0, 0, 0, 0.1)',
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
                    <h2>runTechPortfolioとは</h2>
                    <p>runTechPortfolioとはrunTech(本サイト作成者)のエンジニア活動についてまとめたサイトです</p>
                </div>
                <div className="head-center">
                    <h1 className="head">runTech</h1>
                </div>
                {/* introduce は別コンポーネント */}
                <div className="introduce">
                    <IntroduceSection introImg={introImg} />
                </div>
            </div>
        </>
    )
};

export default Intro;
