import React from "react";
import "./Education.css";

const Education = ({ education }) => {
  return (
    <div className="container-education">
        {education.map((item) => {
          return (
            <div className="education">
              <h3>{item.name}</h3>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Education;