import Logo from "../../assets/logo.png"
import "./navbar.scss"
import React, { useState } from "react" ;
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    
    return (
        <nav className="navbar">
            <div className="wrapper navbar__container">
                <a href="#" className="navbar__logo" onClick={() => setShowNav(false)}>
                    <img src={Logo} alt="Logo"/>
                </a>
                <div className="navbar__links">
                    <ul className={showNav ? "show" : ""}>
                        <li onClick={() => setShowNav(false)}>
                            <a href="#home">Home</a>
                        </li>
                        <li onClick={() => setShowNav(false)}>
                            <a href="#about">About</a>
                        </li>
                        <li onClick={() => setShowNav(false)}>
                            <a href="#services">Services</a>
                        </li>
                        <li onClick={() => setShowNav(false)}>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li onClick={() => setShowNav(false)}>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    <div className="navbar__icons">
                        <a href="https://github.com/YahiaAbukhalifa"><FaGithub/></a>
                        <a href="www.linkedin.com/in/yahia-abukhalifa"><FaLinkedin/></a>
                        <a href="https://www.youtube.com/channel/UCxYLVAidkEcGbud-bE7wExg"><FaYoutube/></a>
                        <a href="mailto:yehyaabukhalifa@gmail.com"><MdMail/></a>
                    </div>
                    <div className="navbar__menu" onClick={() => setShowNav(!showNav)}>
                        {showNav ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
