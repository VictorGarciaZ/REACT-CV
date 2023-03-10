import React from "react";
import { useSelector } from "react-redux";
import "./Me.css";

const Me = () => {
  const { me } = useSelector(state => state.me);
  
  return (
    <div className="me">
      <img src={me.image} alt="fotocv" />
      <div className="card">
      <h2>
        {me.name} {me.adress}
      </h2>
        <p>πΊοΈ {me.city} </p>
        <p>ποΈ {me.birthDate}</p>
        <p>
          π§  
          <a href={"mailto:" + me.email}>
          victorgz1990@gmail.com
          </a>
        </p>
        <p>π± {me.phone}</p>
        <p>πΎ <a href={me.gitHub}>
            GitHub
          </a></p>
      </div>
    </div>
  );
};

export default Me;