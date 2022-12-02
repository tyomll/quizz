import { useState } from "react";
import "./QuestionList.css";
import AnswerItem from "./QuestionItem/AnswerItem";

const QuestionList = ({
  pointsCount,
  setPointCount,
  questions,
  questionNumber,
  setQuestionNumber,
}) => {
  const [clickedCount, setClickedCount] = useState(0);

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
                  key={i}
                  answer={answer}
                  clickedCount={clickedCount}
                  setClickedCount={setClickedCount}
                  pointsCount={pointsCount}
                  setPointCount={setPointCount}
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber}
                />
              );
            }
          })}
      </div>
    </div>
  );
};

export default QuestionList;
