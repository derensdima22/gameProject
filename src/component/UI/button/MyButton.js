import classNames from "classnames";
import React from "react";
import "./MyButton.css";

export const MyButton = ({ onClick, type, children, size = "s" }) => {
  const btnClass = classNames({
    btn: true,
    btnSecondary: type === "secondary",
    btnPrimary: type === "primary",
    btnSmall: size === "s",
    btnMedium: size === "m",
  });
  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};
