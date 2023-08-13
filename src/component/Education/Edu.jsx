import React from "react";
import "./edu.css";
import CV from "../../img/cv.pdf";
import img1 from "../../img/colg.jpg";
import img2 from "../../img/school.jpeg";
import img3 from "../../img/education.png";
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Edu = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="services">
        <div className="awesome">
          <h2
            className="common-heading"
            style={{ color: darkMode ? "white" : "" }}
          >
            MY Education
          </h2>
          <span>
            I extend my heartfelt gratitude to my School and College for
            providing nurturing environment, dedicated educators, and diverse
            learning opportunities have played a pivotal role in shaping my
            academic journey
            <br />I have gained, which will undoubtedly pave the way for my
            future success.
          </span>
          <a href={CV} download>
            <button className="btn e-button">Download-CV</button>
          </a>
          <img src={img3} alt="imgx" />
        </div>
        <div className="cards">
          <div className="card1">
            <Card
              emoj={img2}
              heading={"AISSE"}
              detail1={"Passing Year: 2018"}
              detail2={"Percentage: 85/100"}
            />
          </div>
          <div className="card2">
            <Card
              emoj={img2}
              heading={"AISSCE"}
              detail1={"Passing Year: 2020"}
              detail2={"Percentage: 94.6/100"}
            />
          </div>
          <div className="card3">
            <Card
              emoj={img1}
              heading={"B.Tech"}
              detail1={"Passing Year: 2024"}
              detail2={"CGPA: 8.55/10"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Edu;
