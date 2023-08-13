import React from "react";
import "./toggle.css";
import { BsFillSunFill, BsMoonStars } from "react-icons/bs";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Toogle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleclick = () => {
    theme.dispatch({ type: "toogle" });
  };
  return (
    <>
      <div onClick={handleclick} className="toogle">
        <BsFillSunFill></BsFillSunFill>
        <BsMoonStars></BsMoonStars>
        <button
          className="t-button"
          style={darkMode ? { left: "2px" } : { right: "2px" }}
        ></button>
      </div>
    </>
  );
};

export default Toogle;
