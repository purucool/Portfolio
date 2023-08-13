import React from "react";
import "./intro.css";
import git from "../../img/github.png";
import insta from "../../img/instagram.png";
import linkedin from "../../img/Linkedin.png";
import myself from "../../img/removed bg.png";
import profile from "../../img/profile.png";
import ach from "../../img/achievements.png";
import { Link } from "react-router-dom";

const Myintro = () => {
  return (
    <>
      <div className="intro">
        <div className="i-left">
          <div className="i-name">
            <span>Hello It's Me -</span>
            <span>Purushottam Varshney</span>
            <span> Software and Frontend Developer</span>
          </div>
          <Link className="a" to="/contact">
            <button className="btn i-button">Hire Me</button>
          </Link>
          <div className="intro-icon">
            <a href="https://github.com/purucool">
              <img src={git} alt="img1"></img>
            </a>
            <a href="https://www.linkedin.com/in/purushottam-varshney-75486819b/">
              <img alt="img2" src={linkedin}></img>
            </a>
            <a href="https://www.instagram.com/purucoolbab123/">
              <img alt="img3" src={insta}></img>
            </a>
          </div>
        </div>

        <div className="i-right">
          <div className="imagebox">
            <img className="myself" alt="img4" src={profile} />
            <img className="myself" alt="img5" src={myself} />
            <img className="myself" alt="img6" src={ach} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Myintro;
