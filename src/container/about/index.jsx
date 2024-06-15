import React from "react";
import "./style.scss";
import { PageHeaderContent } from "../../components/pageHeaderComponent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import { IoLogoReact } from "react-icons/io5";
import { FaDatabase, FaDev, FaJava } from "react-icons/fa";

const personalDetails = [
    {
        label: "Name:",
        value: "Vitthal Biradar",
    },
    {
        label: "Age:",
        value: "21",
    },
    {
        label: "Address:",
        value: "India",
    },
    {
        label: "Email:",
        value: "vitthalbiradar50@gmail.com",
    },
    {
        label: "Contact No:",
        value: "+91 9356613671",
    },
];

const jobSummary =
    "A third-year Computer Engineering student at G H Raisoni College of Engineering and Management, Wagholi, with a passion for software development. I have a solid foundation in programming languages like Java, C++, and JavaScript, and I specialize in React JS development. Currently, I am enhancing my skills in backend development. I am enthusiastic about leveraging technology to solve real-world problems and am eager to explore new opportunities in the tech industry.";
export const About = () => {
    return (
        <section id='about' className='about'>
            <PageHeaderContent
                headerText='About Me'
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className='about__content'>
                <div className='about__content__personalWrapper'>
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{ transform: "translateX(-900px)" }}
                        end={{ transform: "translateX(0px)" }}
                    >
                        <h3>Front End Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{ transform: "translateX(500px)" }}
                        end={{ transform: "translateX(0px)" }}
                    >
                        <h3 className='personalInformationHeaderText'>
                            Personal Details:
                        </h3>
                        <ul>
                            {personalDetails.map((item, idx) => (
                                <li key={idx}>
                                    <span className='title'>{item.label}</span>
                                    <span className='value'>{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </Animate>
                </div>
                <div className='about__content__servicesWrapper'>
                    <div className='about__content__servicesWrapper__innerContent'>
                        <div>
                            <FaDatabase
                                size={60}
                                color=' var(--yellow-theme-main-color)'
                            />
                        </div>
                        <div>
                            <FaDev
                                size={60}
                                color=' var(--yellow-theme-main-color)'
                            />
                        </div>
                        <div>
                            <FaJava
                                size={60}
                                color=' var(--yellow-theme-main-color)'
                            />
                        </div>
                        <div>
                            <IoLogoReact
                                size={60}
                                color=' var(--yellow-theme-main-color)'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
