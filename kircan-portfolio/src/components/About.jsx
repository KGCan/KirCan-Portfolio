import React from "react";

function About() {
    return (
        <div>
            <p className = "content is-medium">Business Owner and Full Stack Developer in Training</p>
            <hr />
            <img className  = "profile-pic" src = {process.env.PUBLIC_URL + '/images/kirphoto.jpg'} alt = "Kirsten Canady"/>
            <p className = "content">
            My name is Kirsten Canady and I am a part owner and the office manager for a company called Pacific DraftWorks with my husband.  We design, install and service draft beverage systems throughout Northern California and Nevada.  We have two children, a 11 year old daughter and a 9 year old son, a dog, two cats and seven chickens.  Our company aspires to create a more interative user experience when requesting service for draft system needs.  We are working to create a system that combines a back-end database for companies that pairs with a mobile application for field technicians and a mobile application for customers.  By streamlining the process of requesting service and quotes for new draft systems we hope to change the dynamic of the draft beverage industry.
            </p>
        </div>
    );
}


export default About;