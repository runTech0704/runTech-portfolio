import React, { useState } from "react";
import "./cards.css";


const Cards = () => {

    const text_list = [
        "要件の整理から設計、実装、テストまでの一貫した開発経験",
        "GCP の AlloyDB や共有VPCなどをプロダクトに導入",
        "指定した範囲内で複数人の空き時間を計算",
        "新製品開発プロジェクトにバックエンドエンジニアとしてアサイン",
        "Google Calenar API を使用した開発",
        "経験や思考のアウトプット",
    ]

    const [sentence1, setSentence1] = useState("")
    const [sentence2, setSentence2] = useState("")
    const [sentence3, setSentence3] = useState("")
    const [sentence4, setSentence4] = useState("")
    const [sentence5, setSentence5] = useState("")
    const [sentence6, setSentence6] = useState("")

    const insertSentence1 = () => {
        setSentence1(text_list[0]);
    }

    const removeSentence1 = () => {
        setSentence1("");
    }


    const insertSentence2 = () => {
        setSentence2(text_list[1]);
    }

    const removeSentence2 = () => {
        setSentence2("");
    }

    const insertSentence3 = () => {
        setSentence3(text_list[2]);
    }

    const removeSentence3 = () => {
        setSentence3("");
    }


    const insertSentence4 = () => {
        setSentence4(text_list[3]);
    }

    const removeSentence4 = () => {
        setSentence4("");
    }


    const insertSentence5 = () => {
        setSentence5(text_list[4]);
    }

    const removeSentence5 = () => {
        setSentence5("");
    }


    const insertSentence6 = () => {
        setSentence6(text_list[5]);
    }

    const removeSentence6 = () => {
        setSentence6("");
    }


    return (
        <div className="cards-container">
                <h1 className="head">Works</h1>
                <div class="cards">
                    <div class="card red" onMouseEnter={insertSentence1} onMouseLeave={removeSentence1}>
                        <p class="tip">API開発 3件</p>
                        <p class="second-text">{sentence1}</p>
                    </div>
                    <div class="card blue" onMouseEnter={insertSentence2} onMouseLeave={removeSentence2}>
                        <p class="tip">新しい技術をプロダクトに導入</p>
                        <p class="second-text">{sentence2}</p>
                    </div>
                    <div class="card green" onMouseEnter={insertSentence3} onMouseLeave={removeSentence3}>
                        <p class="tip">複雑なロジックを実装</p>
                        <p class="second-text">{sentence3}</p>
                    </div>
                </div>
                <div class="cards">
                    <div class="card red" onMouseEnter={insertSentence4} onMouseLeave={removeSentence4}>
                        <p class="tip">新規開発</p>
                        <p class="second-text">{sentence4}</p>
                    </div>
                    <div class="card blue" onMouseEnter={insertSentence5} onMouseLeave={removeSentence5}>
                        <p class="tip">Google Calendar API</p>
                        <p class="second-text">{sentence5}</p>
                    </div>
                    <div class="card green" onMouseEnter={insertSentence6} onMouseLeave={removeSentence6}>
                        <p class="tip">テックブログ: runTech</p>
                        <p class="second-text">{sentence6}</p>
                    </div>
                </div>
        </div>
    )
};

export default Cards;
