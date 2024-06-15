import React from "react";
import "./style.scss";
import { PageHeaderContent } from "../../components/pageHeaderComponent";
import { IoBookSharp } from "react-icons/io5";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { resumeData } from "../../utils/resume";
import { MdWork } from "react-icons/md";

export const Resume = () => {
    return (
        <section id='resume' className='resume'>
            <PageHeaderContent
                headerText='My Resume'
                icon={<IoBookSharp size={40} />}
            />
            <div className='timeline'>
                <div className='timeline__education'>
                    <h3 className='timeline__education__header-text'>
                        Education
                    </h3>
                    <VerticalTimeline
                        layout='1-column'
                        lineColor='var(--yellow-theme-main-color)'
                    >
                        {resumeData.education.map((item, i) => (
                            <VerticalTimelineElement
                                key={i}
                                className='timeline__education__vertical-timeline-element'
                                contentStyle={{
                                    background: "none",
                                    color: "var( --yellow-theme-sub-text-color)",
                                    border: "1.5px solid var(--yellow-theme-main-color)",
                                }}
                                icon={<MdWork />}
                                iconStyle={{
                                    background: "#181818",
                                    color: "var(--yellow-theme-main-color)",
                                }}
                            >
                                <div className='vertical-timeline-element-title-wrapper'>
                                    <h3>
                                        {item.title}
                                        {": "}
                                        {item.subTitle}
                                    </h3>
                                    <h4>{item.description}</h4>
                                    <p>{item.passing}</p>
                                </div>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
                {/* <div className='timeline__experience'>
                    <h3 className='timeline__experience__header-text'>
                        Experience
                    </h3>
                    <VerticalTimeline
                        layout='1-column'
                        lineColor='var(--yellow-theme-main-color)'
                    >
                        {resumeData.experience.map((item, i) => (
                            <VerticalTimelineElement
                                key={i}
                                className='timeline__experience__vertical-timeline-element'
                                contentStyle={{
                                    background: "none",
                                    color: "var( --yellow-theme-sub-text-color)",
                                    border: "1.5px solid var(--yellow-theme-main-color)",
                                }}
                                icon={<MdWork />}
                                iconStyle={{
                                    background: "#181818",
                                    color: "var(--yellow-theme-main-color)",
                                }}
                            >
                                <div className='vertical-timeline-element-title-wrapper'>
                                    <h3>{item.title}</h3>
                                    <h4>{item.subTitle}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div> */}
            </div>
        </section>
    );
};
