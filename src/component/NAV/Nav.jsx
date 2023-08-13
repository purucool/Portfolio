import React from "react";
import CV from "../../img/cv.pdf";
import "./Nav.css";
import Toogle from "../Toggle/Toogle";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Portfolio. </div>
          <Toogle></Toogle>
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul>
              <li>
                <Link className="a" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="a" to="/education">
                  Education
                </Link>
              </li>
              <li>
                <Link className="a" to="/skill">
                  Skill
                </Link>
              </li>
              <li>
                <Link className="a" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="a" to="/project">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="a" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <a href={CV} download>
            <button className="btn n-button">Download-CV</button>
          </a>
        </div>
      </div>
    </>
  );
};
export default Nav;
