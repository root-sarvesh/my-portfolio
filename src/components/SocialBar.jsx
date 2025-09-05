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
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
            </a>
            <a href="mailto:youremail@gmail.com">
            <MdEmail />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer">
            <FaDiscord />
            </a>
        </div>
        </div>
    );
    }
