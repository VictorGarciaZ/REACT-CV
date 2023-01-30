import React from 'react'
import "./More.css"

const More = ({ languages }) => {
  return (
    <div className="container-more">
      {languages.map((item, index) => {
        return (
          <div className="more" key={index}>
            <h3>{item.language}</h3>
            <p>{item.wrlevel}</p>
            <p>{item.university}</p>
            <p>{item.date}</p>
            <h3>{index.language}</h3>
          </div>
        );
      })}  
    </div>
  );
};

export default More