import React from "react";
import "./swiper.css";
const Pcard = ({ imgsrc, alt, title, link }) => {
  return (
    <>
      <div className="c-container">
        <div className="img-container">
          <img src={imgsrc} alt={alt}></img>
        </div>
        <div className="c-title">
          <h3>{title}</h3>
        </div>
        <div className="c-button">
          <button>
            <a href={link}>LIVE-CODE</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Pcard;
