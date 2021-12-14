import React from "react";
import { MyButton } from "../UI/button/MyButton";
import "./gameBuy.css";

export const GameBuy = ({ game }) => {
  return (
    <div className="gameBuy">
      <span className="gameBuyPrise">{game.price} руб.</span>
      <MyButton onClick={() => null} type={"primary"}>
        В корзину
      </MyButton>
    </div>
  );
};
