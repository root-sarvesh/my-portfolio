    import React, { useState } from "react";
    import "../styles/SocialBar.css"
    import { FaLinkedin, FaGithub, FaDiscord, FaInstagram } from "react-icons/fa";
    import { MdEmail } from "react-icons/md";

    export default function SocialBar() {
    const [hoverSide, setHoverSide] = useState(""); // "left" | "right" | ""

    return (
        <div
        className={`social-bar-wrapper ${hoverSide}`}
        onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            if (x < rect.width / 2) {
            setHoverSide("left");
            } else {
            setHoverSide("right");
            }
        }}
        onMouseLeave={() => setHoverSide("")}
        >
        <div className="social-bar">
            <a href="https://www.linkedin.com/in/sarvesh-k-p-98006b310/" target="_blank" rel="noreferrer">
            <FaLinkedin />
            </a>
            <a href="mailto:sarveshkp23@gmail.com">
            <MdEmail />
            </a>
            <a href="https://github.com/root-sarvesh" target="_blank" rel="noreferrer">
            <FaGithub />
            </a>
            <a href="https://instagram.com/sarvesh__kp" target="_blank" rel="noreferrer">
            <FaInstagram />
            </a>
            <a href="https://discordapp.com/users/1255566101622820875" target="_blank" rel="noreferrer">
            <FaDiscord />
            </a>
        </div>
        </div>
    );
    }
