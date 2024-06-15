import React, { useState } from "react";
import { FaBars, FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";
import "./style.scss";

const data = [
    {
        to: "/",
        label: "HOME",
    },
    {
        to: "/about",
        label: "ABOUT ME",
    },
    {
        to: "/skills",
        label: "SKILLS",
    },
    {
        to: "/resume",
        label: "RESUME",
    },
    {
        to: "/portfolio",
        label: "PORTFOLIO",
    },
    ,
    {
        to: "/contact",
        label: "CONTACT",
    },
];
export default function Navbar() {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    const handleMenuClick = () => {
        setToggleIcon(false);
    };
    return (
        <div>
            <nav className='navbar'>
                <div className='navbar__container'>
                    <Link to='/' className='navbar__container__logo'>
                        <FaReact size={30} />
                    </Link>
                </div>

                <ul
                    className={`navbar__container__menu ${
                        toggleIcon ? "active" : ""
                    }`}
                >
                    {data.map((item, idx) => (
                        <li className='navbar__container__menu__item' key={idx}>
                            <Link
                                to={item.to}
                                onClick={handleMenuClick}
                                className='navbar__container__menu__item__links'
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='navbar__container__links'>
                    <a
                        href='https://www.linkedin.com/in/vitthal-biradar-ms7'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FaLinkedin size={22} />
                    </a>
                    <a
                        href='https://github.com/vitthal-07'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FaGithub size={22} />
                    </a>
                </div>
                <div className='nav-icon' onClick={handleToggleIcon}>
                    {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
                </div>
            </nav>
        </div>
    );
}
