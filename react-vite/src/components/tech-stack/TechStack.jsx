import React, { useState } from "react";
import "./tech-stack.css";


const TechStack = () => {

    return (
        <div className="tech-stack-container">
            <h1>Tech Stack</h1>
            <div class="stack-cards">
                <div class="stack-card-container">
                    <div class="stack-card stack-blue">
                        <div class="img-content">
                            <img src="../../../public/tech-stack/python-logo.png" alt="python" />
                        </div>
                        <div class="stack-content">
                            <p class="stack-heading">Python</p>
                            <p>
                            API 作成など。
                            </p>
                        </div>
                    </div>
                </div>
                <div class="stack-card-container">
                    <div class="stack-card stack-green">
                        <div class="img-content">
                            <img src="../../../public/tech-stack/django-logo.png" alt="django" />
                        </div>
                        <div class="stack-content">
                            <p class="stack-heading">Django</p>
                            <p>
                            Django ORM を使用した複雑なクエリ作成や自前の Paginator を作成。
                            </p>
                        </div>
                    </div>
                </div>
                <div class="stack-card-container">
                    <div class="stack-card stack-white">
                        <div class="img-content">
                            <img src="../../../public/tech-stack/gcp-logo.png" alt="gcp" />
                        </div>
                        <div class="stack-content">
                            <p class="stack-heading">GCP</p>
                            <p>
                            アーキテクチャの検討・構築ができる
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="stack-cards">
                <div class="stack-card-container">
                    <div class="stack-card stack-purple">
                        <div class="img-content">
                            <img src="../../../public/tech-stack/postgresql-logo.png" alt="postgresql" />
                        </div>
                        <div class="stack-content">
                            <p class="stack-heading">PostgreSQL</p>
                            <p>
                            RDB 権限整理
                            </p>
                        </div>
                    </div>
                </div>
                <div class="stack-card-container">
                    <div class="stack-card stack-orange">
                        <div class="img-content">
                            <img src="../../../public/tech-stack/docker-logo.png" alt="docker" />
                        </div>
                        <div class="stack-content">
                            <p class="stack-heading">Docker</p>
                            <p>
                            コンテナにて環境を作成
                            </p>
                        </div>
                    </div>
                </div>
                <div class="stack-card-container">
                    <div class="stack-card stack-yellow">
                        <div class="img-content">
                            <img src="../../../public/tech-stack/react-logo.png" alt="react" />
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
        </div>
    )
};


export default TechStack;
