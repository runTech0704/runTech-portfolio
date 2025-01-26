import React, { useState } from "react";
import "./cards.css";

const Cards = () => {
  const textList = [
    ["これまで3件のAPI開発を経験", "要件の整理から参加して技術面で議論して、要件に見合う設計と実装を行ってきました"],
    ["導入実績のない技術を導入する" ,"GCP の AlloyDB や共有VPCなどを調査から実験、導入、マニュアル作成まで一貫して担当"],
    ["カレンダーアプリにて指定した範囲内で複数人の空き時間を計算するロジックを実装", "100人が空いている時間を1秒でわかるパフォーマンスを実現"],
    ["新製品開発プロジェクトにバックエンドエンジニアとしてアサイン", "アイデア出しから実装まで担当"],
    ["Google Calenar API を使用した開発", "カレンダーアプリ開発時の急な仕様変更にも対応"],
    ["経験や思考をアウトプット", <a href="https://runtech-blog.netlify.app/">renTech Blog</a>]
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="cards-container">
      <h1 className="head">Works</h1>

      {/* 上段のカード */}
      <div className="cards">
        {textList.slice(0, 3).map((texts, index) => (
          <div
            key={index}
            className={`card ${index === 0 ? "red" : index === 1 ? "blue" : "green"}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <p className="tip">
              {["API開発", "新技術の導入", "複雑なロジック"][index]}
            </p>
            <div className="second-text">
              {hoveredIndex === index && texts.map((text, i) => <p key={i}>{text}</p>)}
            </div>
          </div>
        ))}
      </div>

      {/* 下段のカード */}
      <div className="cards">
        {textList.slice(3, 6).map((texts, index) => (
          <div
            key={index + 3}
            className={`card ${index === 0 ? "red" : index === 1 ? "blue" : "green"}`}
            onMouseEnter={() => handleMouseEnter(index + 3)}
            onMouseLeave={handleMouseLeave}
          >
            <p className="tip">
              {["新規開発", "Google Calendar API", "ブログ執筆"][index]}
            </p>
            <div className="second-text">
              {hoveredIndex === index + 3 && texts.map((text, i) => <p key={i}>{text}</p>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
