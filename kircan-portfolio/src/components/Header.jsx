// Links to various components

import React, { useState } from 'react';
import Navbar from "./Navbar";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";

function CreateHeader() {
    const [currentPage, handlePageChange] = useState('About');

    //use the renderPage method to utilize a switch statement to render the correct page

    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "Portfolio": 
                return <Portfolio />;
            case "Contact": 
                return <Contact />;
            case "Resume": 
                return <Resume />;

            default:
                return <About />;
        }
    };

    return (
        <div>
            <nav className = "navbar">
                <div className = "navbar-brand">
                    <a className = "navbar-item"
                    rel = "noreferrer"
                    target = "_blank"
                    href = "https://github.com/KGCan">
                        <span className = "content is-large">Kirsten Canady</span>
                    </a>
                </div>
            </nav>
            <Navbar
            currentPage = {currentPage}
            handlePageChange = {handlePageChange}/>
            <main>
                <div>{renderPage(currentPage)}</div>
            </main>
        </div>
    );
}

export default CreateHeader;