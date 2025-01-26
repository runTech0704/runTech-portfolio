import React, { useState } from "react";

import pythonLogo from "../../image/tech-stack/python-logo.png";
import djangoLogo from "../../image/tech-stack/django-logo.png";
import gcpLogo from "../../image/tech-stack/gcp-logo.png";
import postgresqlLogo from "../../image/tech-stack/postgresql-logo.png";
import dockerLogo from "../../image/tech-stack/docker-logo.png";
import reactLogo from "../../image/tech-stack/react-logo.png";
import "./tech-stack.css";



const TechStack = () => {

    return (
        <div className="tech-stack-container">
            <h1 className="head">Tech Stack</h1>
            <div class="stack-cards">
                <div class="stack-card-container">
                    <div class="stack-card stack-blue">
                        <div class="img-content">
                            <img src={pythonLogo} alt="python" />
                        </div>
                        <div class="stack-content">
                            <p class="stack-heading">Python</p>
                            <p>
                                メインで使用している言語
                            </p>
                            <p>
                                データ整形からAPI作成や時間計算等を実装、DBとの連携
                            </p>
                        </div>
                    </div>
                </div>
                <div class="stack-card-container">
                    <div class="stack-card stack-green">
                        <div class="img-content">
                            <img src={djangoLogo} alt="django" />
                        </div>
                        <div class="stack-content">
                            <p class="stack-heading">Django</p>
                            <p>
                                実務でメインで使用しているフレームワーク
                            </p>
                            <p>
                                Django ORM を使用した複雑なクエリ作成や自前の Paginator を作成。
                            </p>
                        </div>
                    </div>
                </div>
                <div class="stack-card-container">
                    <div class="stack-card stack-white">
                        <div class="img-content">
                            <img src={gcpLogo} alt="gcp" />
                        </div>
                        <div class="stack-content">
                            <p class="stack-heading">GCP</p>
                            <p>
                                アーキテクチャの検討・構築ができる
                            </p>
                            <p>
                                認証資格を２つ取得している
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="stack-cards">
                <div class="stack-card-container">
                    <div class="stack-card stack-purple">
                        <div class="img-content">
                            <img src={postgresqlLogo} alt="postgresql" />
                        </div>
                        <div class="stack-content">
                            <p class="stack-heading">PostgreSQL</p>
                            <p>
                                データベースの作成から権限の設定
                            </p>
                        </div>
                    </div>
                </div>
                <div class="stack-card-container">
                    <div class="stack-card stack-orange">
                        <div class="img-content">
                            <img src={dockerLogo} alt="docker" />
                        </div>
                        <div class="stack-content">
                            <p class="stack-heading">Docker</p>
                            <p>
                            コンテナを使用した環境構築・運用
                            </p>
                        </div>
                    </div>
                </div>
                <div class="stack-card-container">
                    <div class="stack-card stack-yellow">
                        <div class="img-content">
                            <img src={reactLogo} alt="react" />
                        </div>
                        <div class="stack-content">
                            <p class="stack-heading">React</p>
                            <p>
                            本ポートフォリオを React で作成
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tech-stack-summary">
                <blockquote class="quote-2">
                    <p>主に Python を主要言語として開発してきました。</p>
                    <p>GCPではApp EngineやCloud Runを始めとしたホスティングサービスやFirestoreやAlloyDB等のDBの実務経験があります。その他Cloud BuildのCIサービスや共有VPCといったネットワークサービスを構築した経験もあります。</p>
                    <p>Google Cloudの認定資格 Cloud Professional Developer と Cloud Professional Architect も所持しています。</p>
                    <p>Dockerについても実務で使用しています。</p>
                    <p>Reactは実務経験はありませんが、本サイトは React と Cloud Run で作成しています。</p>
                </blockquote>
            </div>
        </div>
    )
};


export default TechStack;
