import ControlBallons from "../../Menu/ControlBallons";
import QuestionList from "../QuestionList/QuestionList";
import "./LevelOne.css";
import { useState } from "react";
import LevelOneEnd from "./LevelOneEnd/LevelOneEnd";

const LevelOne = ({
  pointsCount,
  setPointCount,
  questions,
  setQuestions,
  questionNumber,
  setQuestionNumber,
  setLevel,
}) => {
  const [questionIndex, setQuestionIndex] = useState(0)
  const lvl = 1
  const levelOneGame = (
    <div className="level-one-wrapper">
      <ControlBallons className="level-one-control-ballons" />
      <div className="level-one-container">
        <div className="level-one-points">
          <span>{pointsCount}</span>
        </div>
        <QuestionList
          pointsCount={pointsCount}
          setPointCount={setPointCount}
          questions={questions}
          setQuestions={setQuestions}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          setQuestionIndex={setQuestionIndex}
          questionIndex={questionIndex}
          lvl={lvl}
        />
      </div>
    </div>
  );
  return questions && questionIndex <= 4 ? levelOneGame : <LevelOneEnd />
};

export default LevelOne;
