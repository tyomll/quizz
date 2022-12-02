 import React from "react";

const AnswerItem = ({
  answer,
  bgc,

  handleUserChoice,

}) => {
 

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

// ? `url(require("../../../../images/levelOneQuestionBg"))`
// : "#568a3f" && selectedRight
// ? "#568a3f"
// : "#992727",
