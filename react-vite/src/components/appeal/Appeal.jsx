import React, { useState } from "react";
import "./appeal.css"

const Appeal = () => {

    return (
        <div className="appeal-container">
            <h1 className="head">Appeal</h1>
            <div className="bubble-box">
                <div className="pop">完遂力</div>
                <p>私は開発において「やり切る」姿勢を最も重視しています。</p>
                <p>困難な課題にも果敢に挑み、試行錯誤を重ねて解決へと導きます。</p>
                <p>例えば、会社初のAlloyDB導入プロジェクトでは、十分な導入実績がない中で調査から設計、実験、導入までを一貫して担当しました。</p>
                <p>既存システムとの兼ね合いで最適なアーキテクチャを検討し、コストの最適化を行いました。</p>
            </div>
            <div className="bubble-box">
                <div className="pop">変化への対応</div>
                <p>私は開発現場での「変化に対応」できます。</p>
                <p>変化に対して恐怖を感じず冷静に対応します。</p>
                <p>業務にて、Google API を使用した　Web アプリケーションを作成していました。</p>
                <p>開発が終了しかけた時に、対象の Google API 側に仕様変更がなされました。</p>
                <p>しかし、「冷静」に何が変わったのか、何に影響があるのかを分析・対応しました。</p>
            </div>
            <div className="bubble-box">
                <div className="pop">コミュニケーション</div>
                <p>チーム開発の成功に不可欠なのは「コミュニケーション」です。</p>
                <p>私はバックエンドの実装者として、技術的な視点を活かしながら議論をリードし、プロジェクトを円滑に進めています。</p>
                <p>たとえば、仕様の曖昧さや設計上の課題が発生した際、チームメンバーと密に連携し、全員が納得できる解決策を見つけることを心がけています。</p>
                <p>このようなコミュニケーションが、結果的に高品質なアプリケーションを生み出す要因となっています。</p>
            </div>
        </div>
    )
};

export default Appeal;
