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
                    <p>法政大学文学部史学科卒業後、自社開発系の Web SaaS 事業を展開する会社にエンジニアとして就職。</p>
                    <p>現職ではサーバーサイドを担当しており、API を作成したりしている。</p>
                    <p>強みは目標に対して突っ走ることで、決めたことはやり通すこと。← 要変更</p>
                    <p>エンジニアとして、アウトカムを意識した開発を心掛けています ← 要変更</p>
                </div>

            </div>
        </>
    )
};

export default Intro;
