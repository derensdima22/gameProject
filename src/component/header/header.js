import React from "react";
import { Link } from "react-router-dom";
import { CardBlock } from "../cardBlock/cardBlock";
import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="headerStoreTitle">
          Game Store
        </Link>
      </div>
      <div className="wrapper headerCartBtnWrapper">
        <CardBlock />
      </div>
    </div>
  );
};
