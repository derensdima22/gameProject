import React from "react";
import { GameBuy } from "../gameBuy/gameBuy";
import { GameCover } from "../gameCover/gameCover";
import { GameGenre } from "../gameGenre/GameGenre";

import "./gameItem.css";

export const GameItem = ({ game }) => {
  return (
    <div className="gameItem">
      <GameCover image={game.image} />
      <div className="gameItemDetalis">
        <div className="gameItemTitle">{game.title}</div>
        <div className="gameItemGenre">
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
        </div>
        <div className="gameItemBuy">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};
