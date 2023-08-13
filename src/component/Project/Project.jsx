import React from "react";
import "./project.css";
import Sdata from "./Sdata.jsx";
import Pcard from "./Pcard";
const Project = () => {
  return (
    <>
      <div className="div-heading">
        <h2 className="common-heading">Project</h2>
      </div>
      <div className="project-main">
        {Sdata.map(function ncard(val) {
          return (
            <Pcard
              imgsrc={val.imgsrc}
              title={val.title}
              link={val.link}
              alt={val.alt}
            ></Pcard>
          );
        })}
      </div>
    </>
  );
};
export default Project;
