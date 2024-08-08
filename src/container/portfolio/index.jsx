import React, { useState } from "react";
import "./style.scss";
import { PageHeaderContent } from "../../components/pageHeaderComponent";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { portfolioData } from "../../utils/portfolio-data";

const filterData = [
    {
        filterId: "1",
        label: "All",
    },
    {
        filterId: "2",
        label: "Frontend",
    },
    {
        filterId: "3",
        label: "Backend",
    },
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
                                                <FaGitAlt size={25} />
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDemoClick(index)
                                                }
                                            >
                                                <FaLink size={25} />
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
