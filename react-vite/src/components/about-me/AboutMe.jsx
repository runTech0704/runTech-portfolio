import React from "react";
import "./about-me.css"

const AboutMe = () => {
    return (
        <div className="about-me-container">
                <h1 className="head">AboutMe</h1>
                <div className="q-and-a-container">
                    <details class="q-and-a">
                        <summary>長所と短所は？</summary>
                        <p>目標に突っ走ること。突っ走りすぎてしまうこと。</p>
                    </details>
                    <details class="q-and-a">
                        <summary>趣味は？</summary>
                        <p>お笑い鑑賞。劇場に行ったり、ラジオに聞いたりなど。</p>
                    </details>
                    <details class="q-and-a">
                        <summary>休日の過ごし方</summary>
                        <p>体を動かすこと。筋トレや野球。</p>
                    </details>
                    <details class="q-and-a">
                        <summary>尊敬する人は？</summary>
                        <p>藤井風</p>
                    </details>
                    <details class="q-and-a">
                        <summary>好きな本は？</summary>
                        <p>『Think Clearly』Rolf Dobelli</p>
                    </details>
                    <details class="q-and-a">
                        <summary>好きな映画は？</summary>
                        <p>インターステラー</p>
                    </details>
                </div>
        </div>
    )
};

export default AboutMe;
