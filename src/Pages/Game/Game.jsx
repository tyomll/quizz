import React, { useState } from "react";
import "./Game.css";
import QuestionsList from "./QuestionsList/QuestionsList";

const Game = () => {
  const [isRight, setIsRight] = useState(null);
  return (
    <div className="game-wrapper">
      {isRight !== null && (
        <div className="user-choice-alert">{isRight === true ? "you are right " : "you are not right"}</div>
      )}
      <div className="game-container">
        <QuestionsList isRight={isRight} setIsRight={setIsRight} />
      </div>
    </div>
  );
};

export default Game;
