import React, { useState, useEffect } from "react";

const AnswerItem = ({
  answer,
  clickedCount,
  setClickedCount,
  pointsCount,
  setPointCount,
  questionNumber,
  setQuestionNumber,
}) => {
  const [selectedRight, setSelectedRight] = useState("null");

  const handleUserChoice = async () => {
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
    }
    setClickedCount(0);
    // setTimeout(() => {
    //   setSelectedRight(null);
    // }, 1000);
  };

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setSelectedRight(null);
  //     setClickedCount(0);
  //   }, 1500);

  //   return () => clearTimeout(timeout);
  // }, [selectedRight]);

  return (
    <div
      className="answer-item"
      style={{
        background:
          (selectedRight === "null" &&
            `url(require("../../../../images/levelOneQuestionBg"))`) ||
          (selectedRight === "true" && "#568a3f") ||
          (selectedRight === "false" && "#992727"),
      }}
      onClick={() => handleUserChoice()}
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
