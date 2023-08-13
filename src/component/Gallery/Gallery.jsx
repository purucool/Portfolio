import React from "react";
import "./gallery.css";
// import img1 from "../../img/IMG_7771-skylum-skylum.jpeg";
import img2 from "../../img/img2.jpg";
import img6 from "../../img/IMG_7771-skylum-skylum.jpeg";
import img3 from "../../img/full stack dev cirtificate_page-0001.jpg";
import img4 from "../../img/eg.png";
import img5 from "../../img/python_page-0001.jpg";
const Gallery = () => {
  return (
    <>
      <div className="main">
        <h2 className="common-heading moments">Moments</h2>
        <div className="g-box">
          <div class="gallery">
            <a target="_blank" href="#moments">
              <img src={img6} alt="Cinque Terre" width="600" height="400" />
            </a>
            <div class="desc">WINNERS AT AKTU ZONAL IN FOOTBALL</div>
          </div>
          <div class="gallery">
            <a target="_blank" href="#moments">
              <img src={img3} alt="Northern Lights" width="600" height="400" />
            </a>
            <div class="desc">
              COMPLETED FULL STACK WEB DEVELOPMENT PROGRAM{" "}
            </div>
          </div>

          <div class="gallery">
            <a target="_blank" href="#moments">
              <img src={img2} alt="Forest" width="600" height="400" />
            </a>
            <div class="desc">RUNNER UP'S IN AKTU ZONAL FOOTBALL FEST</div>
          </div>

          <div class="gallery">
            <a target="_blank" href="#moments">
              <img src={img4} alt="Mountains" width="600" height="400" />
            </a>
            <div class="desc">
              REACHED IN FINAL'S IN HACKATHON AT IIT KANPUR
            </div>
          </div>
          <div class="gallery">
            <a target="_blank" href="#moments">
              <img src={img5} alt="Mountains" width="600" height="400" />
            </a>
            <div class="desc">COMPLETED PYTHON CERTIFICATION BY SKILLARENA</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
