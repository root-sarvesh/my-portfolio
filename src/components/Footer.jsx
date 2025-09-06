import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} Sarvesh. All Rights Reserved.
        </p>
        <p className="footer-credit">
          <a
            href="https://skfb.ly/6SvyM"
            target="_blank"
            rel="noopener noreferrer"
          >
            "CyberPunk Laptop"
          </a>{" "}
          by Vivien Deroche is licensed under{" "}
          <a
            href="http://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC Attribution
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
