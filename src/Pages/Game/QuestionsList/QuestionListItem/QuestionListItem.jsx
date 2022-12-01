import React, { useState } from "react";

const QuestionListItem = ({ question, selectedCount, setSelectedCount , setIsRight}) => {
  const [selectedRight, setSelectedRight] = useState(null);
  return (
    <li
      style={{
        backgroundColor:
          selectedRight === null
            ? "rgb(228, 151, 9)"
            : "green" && selectedRight
            ? "green"
            : "red",
      }}
      onClick={() => {
        setSelectedCount(selectedCount + 1);
        if (selectedCount < 1) {
          if (question.isRight === "true") {
            setSelectedRight(true);
            setIsRight(true)
          } else if (selectedRight === null && selectedRight !== true) {
            setSelectedRight(false);
            setIsRight(false)
          }
        }
      }}
    >
      {question.title}
    </li>
  );
};

export default QuestionListItem;
