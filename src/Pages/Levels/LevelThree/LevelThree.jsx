import React, { useState, useEffect } from 'react'
import "./LevelThree.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import QuestionList from '../QuestionList/QuestionList'
import ControlBallons from '../../Menu/ControlBallons'
import axios from 'axios'
const LevelThree = ({ pointsCount,
  setPointCount,
  questionNumber,
  setQuestionNumber, }) => {
  const [mode, setMode] = useState(false)
  const [lvlThreeQuestions, setLvlThreeQuestions] = useState()
  const [questionIndex, setQuestionIndex] = useState(0)
  async function fetchLevelThreeQuestions() {
    const response = await axios.get(
      "https://6388cd90a4bb27a7f79225cb.mockapi.io/quizz/levelThreeQuestions"
    );
    setLvlThreeQuestions(response.data[questionNumber]);
  }
  useEffect(() => {
    if (lvlThreeQuestions) {
      setTimeout(() => {
        fetchLevelThreeQuestions();
      }, 500);
    }
    else {
      fetchLevelThreeQuestions();
    }
  }, [questionNumber]);
  const description = (
    <div className='third-level-wrapper'>
      <div className="third-level-description">
        <div className="thrid-level-description-container">
          <div className="description-text">
            <span>Սիրելի ընկեր, շատ կարևոր է իմանալ, որ պատերազմների ժամանակ չի՛ կարելի զանգել սահմանում գտնվող մեր հարազատին։Քանի որ տեխնիկաների միջոցով թշնամին անմիջապես հայտնաբերում է մեր զինվորների գտնվելու կոորդինատը և կարող է միանգամից հարված ուղարկել`ոչնչացնելով և՛ դիրքը, և՛ զինվորին։ <br></br>
              Շատ կարևոր է նաև`սոցցանցերում և անձնական հաղորդագրություններով չտարածել նկարներ և տեսանյութեր, որոնցում առկա են զինվորական մեքենաների կամ շարասյան տեղաշարժերը, զինծառայողների, մարդկանց կուտակումների տեսարաններ, ինչպես նաև կորուստների, կրած վնասների մասին տեղեկություն։Այս ամենից թշնամին ստանում է ինֆորմացիա`համարելով իր ունեցած հետախուզական տվյալները`ի վնաս մեզ։ <br></br>
              Տեղեկատվական դաշտում պիտի նույնպես <span className='red-text'>զինվորական վարք դրսևորել։</span>
            </span>
            <h1>ԶԳՈ՛Ն ԵՂԵՔ<br></br><span>ՄԻ՛ ՕԳՆԵՔ ԹՇՆԱՄՈՒՆ</span></h1>
          </div>
          <div className='start-third-lvl' onClick={() => {
            setMode(true)
          }}>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  )
  const gameMode = (
    <div className='third-level-wrapper'>
      <ControlBallons className="level-three-control-ballons" />
      <div className="third-level-container">
        <div className="level-three-points">
          <span>{pointsCount}</span>
        </div>
        <QuestionList
          pointsCount={pointsCount}
          setPointCount={setPointCount}
          questions={lvlThreeQuestions}
          setQuestions={setLvlThreeQuestions}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          setQuestionIndex={setQuestionIndex}
          questionIndex={questionIndex}
        />
      </div>

    </div>
  )
  return mode ? gameMode : description
}

export default LevelThree