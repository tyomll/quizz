import React, { useState } from "react";
import "./Game.css";
import QuestionsList from "./QuestionsList/QuestionsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Game = () => {
  const [isRight, setIsRight] = useState(null);
  return (
    <div className="game-wrapper">
      {isRight !== null && (
        <div className="user-choice-alert">
          {isRight === true ? "you are right " : "you are not right"}
        </div>
      )}
      <div className="game-container">
        <QuestionsList isRight={isRight} setIsRight={setIsRight} />
        <div className="game-next-question">
          <button>
            Next Question <FontAwesomeIcon icon={faArrowRight} size="sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
