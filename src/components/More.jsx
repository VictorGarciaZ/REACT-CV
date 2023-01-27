import React from 'react'

const More = ({ languages }) => {
  return (
    <div>
      {languages.map((item, index) => {
        return (
          <div key={index}>
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