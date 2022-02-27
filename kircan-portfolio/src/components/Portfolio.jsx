import React from "react";
import Project from "./Project";

const projects = [
    //add project details and their links here
    {
        id: 0, 
        projectTitle: "RunBuddy",
        languagesUsed: "HTML, CSS",
        image: "/images/RunBuddyScreenGrab.png",
        projectDescription: "A website that offers fitness training services.",
        repoURL: "https://github.com/KGCan/run-buddy.git",
        deployedURL: "https://kgcan.github.io/run-buddy/",
    },
    {
        id: 1, 
        projectTitle: "Walk 'n Spot",
        languagesUsed: "Node, Express with Sessions, MySQL Sequelize, Handlebars, Dotenv, Heroku, Bootstrap, JavaScript, JSHint, HTML, CSS",
        image: "/images/walknspotscreengrab.png",
        projectDescription: "Interactive app that allows the user to search for a list of trails by city and animals sighted on the trails",
        repoURL: "https://github.com/KGCan/Walk-n-Spot.git",
        deployedURL: "https://walk-n-spot.herokuapp.com/",
    },
    {
        id: 2, 
        projectTitle: "Lyrical",
        languagesUsed: "HTML, CSS, JavaScript, Foundation, Canva, Deezer API, LyricsOVH API, W3.css",
        image: "/images/lyrical-circle.gif",
        projectDescription: "Front end application where a user can search for a song's lyrics based on the artist and song title",
        repoURL: "https://github.com/KGCan/Lyrical.git",
        deployedURL: "https://kgcan.github.io/Lyrical/",
    },
    {
        id: 3, 
        projectTitle: "Pacific DraftWorks",
        languagesUsed: "HTML, CSS, Wordpress",
        image: "/images/Pacific_Draftworks_nobackground_20180910.png",
        projectDescription: "Pacific DraftWorks is a draft beverage systems installation and service company, the website allows for a customer to contact the company, view a gallery of previous work and view available services.",
        deployedURL: "https://www.pacificdraftworks.com",
    },
    {
        id: 4, 
        projectTitle: "Weather Dashboard",
        languagesUsed: "HTML, CSS, JavaScript",
        image: "/images/weatherdashboard",
        projectDescription: "A weather dashboard that allows the user to search for a given city and see the current conditions as well as the five day forecast",
        repoURL: "https://github.com/KGCan/Module-6-Challenge.git",
        deployedURL: "https://kgcan.github.io/Module-6-Challenge/",
    },
    {
        id: 5, 
        projectTitle: "Basic Budget Tracker",
        languagesUsed: "Provided starter code, NoSQL, Express.js, MongoDB Atlas, Heroku",
        image: "/images/budgettracker",
        projectDescription: "A basic budget trackder with offline functionality for those traveling without internet access",
        repoURL: "https://github.com/KGCan/Basic-Budget-Tracker.git",
        deployedURL: "https://basic-budget-tracker-app.herokuapp.com/",
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