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
    "As a third-year Computer Engineering student at G H Raisoni College of Engineering and Management in Wagholi, I have a strong passion for software development. I possess a solid foundation in programming languages such as Java, C++, and JavaScript, with a particular specialization in MERN Stack development. I have successfully built industry-level projects using both JavaScript and TypeScript, showcasing my ability to develop robust and scalable solutions. Currently, I'm enhancing my Java programming skills and am enthusiastic about leveraging technology to solve real-world problems. I am eager to explore new opportunities in the tech industry and contribute to innovative solutions.";
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
