import { useState, useEffect } from "react";
import "./QuestionList.css";
import AnswerItem from "./QuestionItem/AnswerItem";

const QuestionList = ({
  pointsCount,
  setPointCount,
  questions,
  questionNumber,
  setQuestionNumber,
  setQuestionIndex,
  questionIndex,
}) => {
  const [clickedCount, setClickedCount] = useState(0);
  const [selectedRight, setSelectedRight] = useState("null");
  const handleUserChoice = (answer) => {
    if (clickedCount < 1) {
      if (answer.isRight === "true") {
        setClickedCount(clickedCount + 1);
        setSelectedRight("true");
        setPointCount(pointsCount + 1);
        setQuestionNumber(questionNumber + 1);
      } else if (answer.isRight === "false") {
        setClickedCount(clickedCount + 1);
        setSelectedRight("false");
        setPointCount(pointsCount - 1);
        setQuestionNumber(questionNumber + 1);
      }
      answer.bgc = true
    }
    setClickedCount(0);

  };

  const kjk = (answer) => {
    if (answer.bgc) {
      if (answer.isRight === 'true') {
        return 'green'
      }
      if (answer.isRight === 'false') {
        return 'red'
      }
    }
  }
  return (
    <div className="question-container">
      <div className="question-title">
        {questions &&
          questions.map((question, i) => {
            if (!question.title) {
              return <span key={i}>{question.question}</span>;
            }
          })}
      </div>
      <div className="answer-container">
        {questions &&
          questions.map((answer, i) => {
            if (answer.title) {
              return (
                <AnswerItem
                  bgc={kjk(answer)}
                  index={i}
                  handleUserChoice={handleUserChoice}
                  selectedRight={selectedRight}
                  setSelectedRight={setSelectedRight}
                  key={i}
                  answer={answer}
                  clickedCount={clickedCount}
                  setClickedCount={setClickedCount}
                  pointsCount={pointsCount}
                  setPointCount={setPointCount}
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber}
                  setQuestionIndex={setQuestionIndex}
                  questionIndex={questionIndex}
                />
              );
            }
          })}
      </div>
    </div>
  );
};
export default QuestionList;

