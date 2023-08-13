import React from "react";
import "./card.css";
const Card = ({ emoj, heading, detail1, detail2 }) => {
  return (
    <>
      <div className="card">
        <img src={emoj} alt="img1" />
        <span>{heading}</span>
        <span>{detail1}</span>
        <span>{detail2}</span>
      </div>
    </>
  );
};

export default Card;
