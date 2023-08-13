import React from "react";
import "./header.css";
import img1 from "../../img/location.png";
import Button from "./Button";
import { MdMarkEmailRead } from "react-icons/md";
import { themeContext } from "../../Context";
import { useContext } from "react";
// import { useForm, ValidationError } from '@formspree/react';
const Contactheader = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="cont-section">
        <h1 className="common-heading">CONTACT ME</h1>
        <p>
          <span style={{ color: darkMode ? "white" : "" }}>
            Looking for more information:-
          </span>
          We value open communication and would love to hear from you. Whether
          you have questions, feedback, or potential collaboration
          opportunities, don't hesitate to reach out. Your thoughts are
          important to us and we are committed to providing a prompt and
          thoughtful response. Feel free to use the contact information provided
          below or fill out the contact form on this page. Thank you for your
          interest and we look forward to connecting with you!
        </p>
      </div>
      <div className="cont-form">
        <div className="ct-left">
          <Button
            text="VIA EMAIL-MESSAGE"
            icon={<MdMarkEmailRead className="icon2" />}
            isOutline={true}
          ></Button>
          <form action="https://formspree.io/f/xoqojogr" method="POST">
            <div className="form-cont">
              <label
                htmlFor="name"
                style={{
                  background: darkMode ? "#1F1F1F" : "",
                  color: darkMode ? "white" : "",
                }}
              >
                Name
              </label>
              <input type="text" name="name" />
            </div>
            <div className="form-cont">
              <label
                htmlFor="email"
                style={{
                  background: darkMode ? "#1F1F1F" : "",
                  color: darkMode ? "white" : "",
                }}
              >
                Email-id
              </label>
              <input type="email" name="eamil" />
            </div>
            <div className="form-cont">
              <label
                htmlFor="msg"
                style={{
                  background: darkMode ? "#1F1F1F" : "",
                  color: darkMode ? "white" : "",
                }}
              >
                Message
              </label>
              <textarea name="msg" />
            </div>
            <Button text="SUBMIT" isOutline={false}></Button>
          </form>
        </div>
        <div className="ct-right">
          <img src={img1} alt="location"></img>
        </div>
      </div>
    </>
  );
};

export default Contactheader;
