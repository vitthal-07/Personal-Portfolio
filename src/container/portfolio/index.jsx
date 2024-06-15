import React, { useState } from "react";
import "./style.scss";
import { PageHeaderContent } from "../../components/pageHeaderComponent";
import { BsFillBagCheckFill } from "react-icons/bs";
import Youtube from "../../Images/Youtube_Clone.jpeg";
import Amazon from "../../Images/Amazon_UI_Clone.avif";
import Social from "../../Images/Social_Media.jpg";
import Netflix from "../../Images/Netflix_UI_Clone.jpeg";
import Myntra from "../../Images/Myntra.png";

const portfolioData = [
    {
        id: "2",
        label: "Youtube Clone",
        image: Youtube,
        repoLink: "https://github.com/vitthal-07/Youtube-Clone",
        demoLink: "https://youtube-clone-by-vitthal.netlify.app/",
    },
    {
        id: "2",
        label: "Myntra Clone",
        image: Myntra,
        repoLink: "https://github.com/vitthal-07/Myntra-Clone-Using-React",
        demoLink: "",
    },
    {
        id: "2",
        label: "SocialSphere",
        image: Social,
        repoLink: "https://github.com/vitthal-07/SocialSphere-Using-React",
        demoLink: "",
    },
    {
        id: "2",
        label: "Amazone UI Clone",
        image: Amazon,
        repoLink: "https://github.com/vitthal-07/Amazon-Clone",
        demoLink: "",
    },
    {
        id: "2",
        label: "Netflix UI Clone",
        image: Netflix,
        repoLink: "https://github.com/vitthal-07/Netflix-Clone",
        demoLink: "",
    },
];

const filterData = [
    {
        filterId: "1",
        label: "All",
    },
    {
        filterId: "2",
        label: "Development",
    },
    // {
    //     filterId: "3",
    //     label: "Design",
    // },
];

export const Portfolio = () => {
    const [filterValue, setFilterValue] = useState("1");
    const [hoverValue, setHoverValue] = useState(null);
    const handleHover = (index) => {
        setHoverValue(index);
    };

    const handleSourceCodeClick = (index) => {
        const link = filteredItems[index].repoLink;
        window.open(link, "_blank");
    };

    const handleDemoClick = (index) => {
        const link = filteredItems[index].demoLink;
        if (link) {
            window.open(link, "_blank");
        }
    };

    const filteredItems =
        filterValue === "1"
            ? portfolioData
            : portfolioData.filter((item) => item.id === filterValue);

    return (
        <section id='portfolio' className='portfolio'>
            <PageHeaderContent
                headerText='My Portfolio'
                icon={<BsFillBagCheckFill size={40} />}
            />
            <div className='portfolio_content'>
                <ul className='portfolio_content__filter'>
                    {filterData.map((item) => (
                        <li
                            key={item.filterId}
                            className={
                                item.filterId === filterValue ? "active" : ""
                            }
                            onClick={() => {
                                setFilterValue(item.filterId);
                            }}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
                <div className='portfolio_content__cards'>
                    {filteredItems.map((item, index) => (
                        <div
                            key={index}
                            className='portfolio_content__cards__item'
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleHover(null)}
                        >
                            <div className='portfolio_content__cards__item__img-wrapper'>
                                <a>
                                    <img src={item.image} alt={item.label} />
                                </a>
                            </div>
                            <div className='overlay'>
                                {index === hoverValue && (
                                    <div>
                                        <p>{item.label}</p>
                                        <div className='overlay__btn-wrapper'>
                                            <button
                                                onClick={() =>
                                                    handleSourceCodeClick(index)
                                                }
                                            >
                                                Source Code
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDemoClick(index)
                                                }
                                            >
                                                Live Demo
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
