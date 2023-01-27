import React from 'react';

const Experience = ({ experience }) => {
  return (
    <div>
        {experience.map((item, index) => {
          return (
            <div key={index}>
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