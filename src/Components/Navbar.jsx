import React from 'react';
import { FaHome, FaChartBar, FaFileAlt, FaLinkedin, FaGithub, FaTwitter, FaFolder } from 'react-icons/fa';
import '../CSS/Navbar.css';

function Navbar() {
    return (
        <div className="icon-bar">
            <div className="icon" title="Home">
                <a href="/">
                    <span className="symbol"><FaHome /></span>
                    <span className="title">Home</span>
                </a>
            </div>
            <div className="icon" title="Projects">
                <a href="/Projects">
                    <span className="symbol"><FaFolder /></span>
                    <span className="title">Projects</span>
                </a>
            </div>
            <div className="icon" title="Resume">
                <a href="https://drive.google.com/file/d/1iktUQfL9hkltNe7E8ghicVxubBTvI35s/view">
                    <span className="symbol"><FaFileAlt /></span>
                    <span className="title">Resume</span>
                </a>
            </div>
            <div className="icon" title="LinkedIn">
                <a href="https://www.linkedin.com/in/yash-shelar-373372205/" target="_blank" rel="noopener noreferrer">
                    <span className="symbol"><FaLinkedin /></span>
                    <span className="title">LinkedIn</span>
                </a>
            </div>
            <div className="icon" title="GitHub">
                <a href="https://github.com/YashShelar04" target="_blank" rel="noopener noreferrer">
                    <span className="symbol"><FaGithub /></span>
                    <span className="title">GitHub</span>
                </a>
            </div>
            <div className="icon" title="Twitter">
                <a href="https://x.com/ydshelar04" target="_blank" rel="noopener noreferrer">
                    <span className="symbol"><FaTwitter /></span>
                    <span className="title">Twitter</span>
                </a>
            </div>
        </div>
    );
}

export default Navbar;
