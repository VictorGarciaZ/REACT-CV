import React from 'react'
import "./About.css"


const About = ({ aboutMe }) => {
  return (
    <div className="about-container">
      {aboutMe.map((item, index) => {
        return (
          <div className="programs" key={index}>
            <h4>{item.info}</h4>
            <img className="logo" src={item.image} alt="logo" />
            <span className="percent">{item.percent}</span>
          </div>
        );
      })}
    </div>
  );
}

export default About;