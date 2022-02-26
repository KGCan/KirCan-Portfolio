import React from "react";
import Project from "./Project";

const projects = [
    //add project details and their links here
    {
        id: 0, 
        projectTitle: "RunBuddy",
        languagesUsed: "HTML, CSS",
        image: "pull image from initial porfolio here",
        projectDescription: "Description of project here",
        repoURL: "",
        deployedURL: "",
    },
    {
        id: 1, 
        projectTitle: "Robot Wars",
        languagesUsed: "",
        image: "",
        projectDescription: "",
        repoURL: "",
        deployedURL: "",
    },
];

function createPortfolio() {
    return (
        <div>
            <p className = "content">Projects</p>
            <hr />

            <Project projects = {projects} />
        </div>
    );
}

export default createPortfolio;