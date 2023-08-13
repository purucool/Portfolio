import React from "react";
import skillimage from "../../img/undraw_percentages_re_a1ao.svg";
import "./skill.css";
const Skill = () => {
  return (
    <>
      <section className="section ">
        <div className="bio-image">
          <img src={skillimage} alt="img1" />
        </div>
        <div className="Biodata">
          <h2 className="common-heading">My Skills</h2>
          <p>
            These are my Skills that I have gained in these 4 year of the my
            graduation . I am proficient in HTML, CSS, and JavaScript, React.js,
            Python, C++, MYSQL, Machine Learning and including other basic
            knowldege of my domain
          </p>
          <br></br>
          <div className="bio-data-stats">
            <div className="bio-stats">
              <h3>HTML</h3>
              <div className="progress-bar progress-bar1">
                <span>94%</span>
              </div>
            </div>
            <div className="bio-stats">
              <h3>CSS</h3>
              <div className="progress-bar progress-bar2">
                <span>75%</span>
              </div>
            </div>
            <div className="bio-stats">
              <h3>Javascript</h3>
              <div className="progress-bar progress-bar3">
                <span>60%</span>
              </div>
            </div>
            <div className="bio-stats">
              <h3>Python</h3>
              <div className="progress-bar progress-bar4">
                <span>80%</span>
              </div>
            </div>
            <div className="bio-stats">
              <h3>C++</h3>
              <div className="progress-bar progress-bar5">
                <span>70%</span>
              </div>
            </div>
            <div className="bio-stats">
              <h3>MYSQL</h3>
              <div className="progress-bar progress-bar6">
                <span>75%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
