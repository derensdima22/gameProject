import React from "react";
import "./gameCover.css";

export const GameCover = ({ image = "" }) => {
  return (
    <div className="gameCover" style={{ backgroundImage: `url(${image})` }} />
  );
};
