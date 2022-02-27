// Navigation Bar with clickable titles to take user to each individual section

import React from "react";

function navBar(props) {
    const pageTabs = ["About", "Contact", "Portfolio", "Resume"];
    return (
        <div className = "tabs is-centered">
            <ul className = "nav nav-tabs">
                {pageTabs.map((tab) => (
                    <li className = {
                        props.currentPage === tab ? "nav-item is-active" : "nav-item"
                    }
                    key = {tab}
                    >
                        <a href = {"#" + tab.toLowerCase()}
                        onClick = {() => props.handlePageChange(tab)}
                        className = {
                            props.currentPage === tab ? "nav-link active" : "nav-link"
                        }
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default navBar;