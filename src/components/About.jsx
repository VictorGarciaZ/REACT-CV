import React from 'react'
import "./About.css"

const About = ({ aboutMe }) => {
  return (
    <div className="about-container"> 
        {aboutMe.map((item, index) => {
          return (
            <div key={index}>
              <h3 className="programs">{item.info}</h3>
              <span className="about">{item.percent}</span>
            </div>
          );
        })}
    </div>
  );
}

export default About;