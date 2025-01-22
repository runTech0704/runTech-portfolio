import React from "react";

import githubLogo from "../../image/footer-icon/github-30.png";
import xLogo from "../../image/footer-icon/x-30.png";
import rtLogo from "../../image/footer-icon/rt-logo-30.png";
import "./footer.css";

const Footer = () => {

    return (
        <div className="footer-container">
            <div className="footer-2">
                <div className="footer-icons">
                    <a href="https://github.com/runTech0704">
                        <img src={githubLogo} alt="github-icon" />
                    </a>
                    <a href="https://x.com/runrun071719842">
                        <img src={xLogo} alt="x-icon" />
                    </a>
                    <a href="https://runtech-blog.netlify.app/">
                        <img src={rtLogo} alt="runtech-logo" />
                    </a>
                </div>
                <p class="footer__copyright">© 2025 runTech</p>
            </div>
        </div>
    )
};

export default Footer;
