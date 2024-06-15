import React from "react";
import "./style.scss";
export const PageHeaderContent = ({ headerText, icon }) => {
    return (
        <div className='wrapper'>
            <h2>{headerText}</h2>
            <span>{icon}</span>
        </div>
    );
};
