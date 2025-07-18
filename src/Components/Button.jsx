import React from "react";
import "../css/Button.css";

const Button = ({ type = "button", children, onClick, className = "" }) => {
  return (
    <button type={type} onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default Button;
