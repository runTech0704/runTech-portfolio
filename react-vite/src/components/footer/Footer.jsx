import React from "react";
import "./footer.css"

const Footer = () => {

    return (
        <div className="footer-container">
            <div className="footer-2">
                <div className="footer-icons">
                    <a href="https://github.com/runTech0704">
                        <img src="../../../public/footer-icon/github-30.png" alt="github-icon" />
                    </a>
                    <a href="https://x.com/runrun071719842">
                        <img src="../../../public/footer-icon/x-30.png" alt="x-icon" />
                    </a>
                    <a href="https://runtech-blog.netlify.app/">
                        <img src="../../../public/footer-icon/rt-logo-30.png" alt="runtech-logo" />
                    </a>
                </div>
                <p class="footer__copyright">© 2025 runTech</p>
            </div>
        </div>
    )
};

export default Footer;
