import React from 'react';
import "./Experience.css"

const Experience = ({ experience }) => {
  return (
    <div className="container-experience">
        {experience.map((item, index) => {
          return (
            <div className="experience" key={index}>
              <h3>{item.name}</h3>
              <p>{item.where}</p>
              <p>{item.date}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
    </div>
  )
};
export default Experience;