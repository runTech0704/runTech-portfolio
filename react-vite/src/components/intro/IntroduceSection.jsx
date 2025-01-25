import { motion } from "framer-motion";
import { useState } from "react";

import "./introduce-section.css"

const IntroduceSection = ({ introImg }) => {
    const [hoverIntroduce, setHoverIntroduce] = useState(false)
    const introduceCardStyle = {
        borderRadius: '10px',
        boxShadow: hoverIntroduce ? '8px 12px rgba(0, 0, 0, 0.2)' : '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    };

    return (
        <>
            {/* 写真ボックス */}
            <motion.div
                className="image-box"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <img src={introImg} alt="introduce-img" className="introduce-img" />
            </motion.div>

            {/* 文章ボックス */}
            <motion.div
                className="text-box"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={ introduceCardStyle }
                onMouseEnter={() => setHoverIntroduce(true)}
                onMouseLeave={() => setHoverIntroduce(false)}
            >
                <p>法政大学文学部史学科卒業後</p>
                <p>自社開発系の Web SaaS 事業を展開する会社にエンジニアとして就職。</p>
                <p>現職ではサーバーサイドを担当しており、設計や実装等々を任されている。</p>
                <p>開発時には、完遂力と変化への対応を意識しています。</p>
                <p>チーム開発ではコミュニケーションを怠らず、最高のアウトカムを目指します。</p>
                <p>普段はお笑いと野球を観るのが大好きな関西人。</p>
            </motion.div>
        </>
    );
};

export default IntroduceSection;
