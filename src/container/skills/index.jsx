import React from "react";
import "./style.scss";
import { PageHeaderContent } from "../../components/pageHeaderComponent";
import { MdDeveloperMode } from "react-icons/md";
import { skillsData } from "../../utils/skills";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";

export const Skills = () => {
    return (
        <section id='skills' className='skills'>
            <PageHeaderContent
                headerText='My Skills'
                icon={<MdDeveloperMode size={40} />}
            />
            <div className='skills__content-wrapper'>
                {skillsData.map((item, idx) => (
                    <div
                        key={idx}
                        className='skills__content-wrapper__inner-content'
                    >
                        <Animate
                            play
                            duration={1}
                            delay={0.3}
                            start={{ transform: "translateX(-200px)" }}
                            end={{ transform: "translateX(0px)" }}
                        >
                            <h3 className='skills__content-wrapper__inner-content__category-text'>
                                {item.label}
                            </h3>
                            <div>
                                {item.data.map((skillitem, i) => (
                                    <AnimateKeyframes
                                        play
                                        duration={1}
                                        keyframes={[
                                            "opacity : 1",
                                            "opacity : 0",
                                        ]}
                                        iterationCount={1}
                                    >
                                        <div
                                            key={i}
                                            className='progressbar-wrapper'
                                        >
                                            <p>{skillitem.skillName}</p>
                                            <Line
                                                percent={skillitem.percentage}
                                                strokeWidth={"2"}
                                                strokeColor='var(--yellow-theme-main-color)'
                                                trailWidth={"2"}
                                                strokeLinecap='square'
                                            />
                                        </div>
                                    </AnimateKeyframes>
                                ))}
                            </div>
                        </Animate>
                    </div>
                ))}
            </div>
        </section>
    );
};
