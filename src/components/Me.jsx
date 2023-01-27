import React from "react";
import "./Me.css";

const Me = ({ me }) => {
  return (
    <div className="me">
      <img src={me.image} alt="fotocv" />
      <div className="card">
      <h2>
        {me.name} {me.adress}
      </h2>
        <p>🗺️ {me.city} </p>
        <p>🗓️ {me.birthDate}</p>
        <p>
          📧  
          <a href={"mailto:" + me.email}>
          victorgz1990@gmail.com
          </a>
        </p>
        <p>📱 {me.phone}</p>
        <p>💾 <a href={me.gitHub}>
            GitHub
          </a></p>
      </div>
    </div>
  );
};

export default Me;