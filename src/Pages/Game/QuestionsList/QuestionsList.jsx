import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import QuestionListItem from "./QuestionListItem/QuestionListItem";

const QuestionsList = ({ isRight, setIsRight }) => {
  const [questions, setQuestions] = useState();
  const [selectedCount, setSelectedCount] = useState(0);

  async function fetchQuestions() {
    const response = await axios.get(
      "https://6388cd90a4bb27a7f79225cb.mockapi.io/quizz/questions"
    );
    const questions = response.data;
    setQuestions(questions);
  }
  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <>
      <ul>
        {questions &&
          questions.map((question, i) => {
            return (
              <QuestionListItem
                key={i}
                question={question}
                selectedCount={selectedCount}
                setSelectedCount={setSelectedCount}
                setIsRight={setIsRight}
              />
            );
          })}
      </ul>
    </>
  );
};

export default QuestionsList;
