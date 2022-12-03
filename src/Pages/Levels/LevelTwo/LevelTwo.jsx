import React, { useState, useEffect } from 'react'
import ControlBallons from '../../Menu/ControlBallons'
import QuestionList from '../QuestionList/QuestionList'
import "./LevelTwo.css"
import axios from 'axios'
import LevelTwoEnd from './LevelTwoEnd/LevelTwoEnd'
const LevelTwo = ({
  pointsCount,
  setPointCount,
  questionNumber,
  setQuestionNumber,
}) => {
  const [lvlTwoQuestions, setLvlTwoQuestions] = useState()
  const [questionIndex, setQuestionIndex] = useState(0)
  async function fetchLevelTwoQuestions() {
    const response = await axios.get(
      "https://6388cd90a4bb27a7f79225cb.mockapi.io/quizz/levelTwoQuestions"
    )
    setLvlTwoQuestions(response.data[questionNumber]);
  }
  useEffect(() => {
    if (lvlTwoQuestions) {
      setTimeout(() => {
        fetchLevelTwoQuestions();
      }, 500);
    }
    else {
      fetchLevelTwoQuestions();
    }
  }, [questionNumber]);
  const levelTwoGame = (
    <div className='second-level-wrapper'>
      <ControlBallons className="level-one-control-ballons" />
      <div className="second-level-container">
        <div className="level-two-points">
          <span>{pointsCount}</span>
        </div>
        <QuestionList
          pointsCount={pointsCount}
          setPointCount={setPointCount}
          questions={lvlTwoQuestions}
          setQuestions={setLvlTwoQuestions}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          setQuestionIndex={setQuestionIndex}
          questionIndex={questionIndex}
        />
      </div>
    </div>
  )
  const levelOneEnd = (
    <LevelTwoEnd />
  )
  return lvlTwoQuestions && questionIndex <= 4 ? levelTwoGame : levelOneEnd
}

export default LevelTwo