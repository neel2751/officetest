import React from "react";

const Button = ({ text, cls, type = "button" }) => {
  return (
    <button type={type} className={cls}>
      {text}
    </button>
  );
};

export default Button;
