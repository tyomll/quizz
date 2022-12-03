 import React from "react";
import { useEffect } from "react";

const AnswerItem = ({
  answer,
  index,
  bgc,
  handleUserChoice,
  setQuestionIndex
}) => {
  useEffect(() => {
    setQuestionIndex(index)
  })
  return (
    <div
      className="answer-item"
      style={{
        background:bgc
      }}
      onClick={() => handleUserChoice(answer)}
    >
      {answer.title}
    </div>
  );
};
export default AnswerItem;

