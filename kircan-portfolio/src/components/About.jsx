import React from "react";

function About() {
    return (
        <div>
            <p className = "content is-medium">Business Owner and Full Stack Developer in Training</p>
            <hr />
            <img className  = "place profile photo here" src = {process.env.PUBLIC_URL + '/image link here'} alt = "Kirsten Canady"/>
            <p className = "content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsum itaque deserunt maiores nihil quia hic, magni alias officiis tempore ipsa eaque aliquam culpa, sed doloremque porro molestias, voluptates dolore!
            </p>
            <p className = "content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus quidem vel magni doloribus pariatur voluptate commodi quae enim repellendus, cupiditate nihil deserunt reprehenderit eum error quod aut aliquid dolorem.
            </p>
        </div>
    );
}


export default About;