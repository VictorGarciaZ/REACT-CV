import React from 'react'

const About = ({ aboutMe }) => {
  return (
    <div>
        {aboutMe.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.info}</p>
            </div>
          );
        })}
    </div>
  );
}

export default About;