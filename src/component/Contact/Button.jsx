import React from "react";
import "./button.css";
const Button = (props) => {
  let name = props.isOutline ? "outline_btn" : "pr_btn";
  return (
    <>
      <button className={`${name}`}>
        {props.icon}
        {props.text}
      </button>
    </>
  );
};
export default Button;
