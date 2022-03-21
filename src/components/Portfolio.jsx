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
        image: "/images/pacificdraftworks.png",
        projectDescription: "Pacific DraftWorks is a draft beverage systems installation and service company, the website allows for a customer to contact the company, view a gallery of previous work and view available services.",
        deployedURL: "https://www.pacificdraftworks.com",
    },
    {
        id: 4, 
        projectTitle: "Weather Dashboard",
        languagesUsed: "HTML, CSS, JavaScript",
        image: "/images/weatherdashboard.png",
        projectDescription: "A weather dashboard that allows the user to search for a given city and see the current conditions as well as the five day forecast",
        repoURL: "https://github.com/KGCan/Module-6-Challenge.git",
        deployedURL: "https://kgcan.github.io/Module-6-Challenge/",
    },
    {
        id: 5, 
        projectTitle: "Basic Budget Tracker",
        languagesUsed: "Provided starter code, NoSQL, Express.js, MongoDB Atlas, Heroku",
        image: "/images/budgettracker.png",
        projectDescription: "A basic budget trackder with offline functionality for those traveling without internet access",
        repoURL: "https://github.com/KGCan/Basic-Budget-Tracker.git",
        deployedURL: "https://basic-budget-tracker-app.herokuapp.com/",
    },
    {
        id: 6, 
        projectTitle: "Nosh-Up",
        languagesUsed: "MongoDb, Express, React, Node, Bootstrap, Heroku, MVC Structuring",
        image: "/images/noshup",
        projectDescription: "A site to search events to meet-up with new people who like the same foods as you. The user will have the ability to sign up and create a user profile that will be visible to other users. A logged in user can create an event, view the events they are hosting as well as any other events they have joined. Users can join existing events from other users, view all events and click on a specific event for more details. Once a specific event has been selected the user can click on the host's profile to view their information and/or click to join the event.",
        repoURL: "https://github.com/limichael97/Nosh-Up.git",
        deployedURL: "http://nosh-up.herokuapp.com/",
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