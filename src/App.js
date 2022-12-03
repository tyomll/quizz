import "./App.css";
import { useState, useEffect , useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import LevelOne from "./Pages/Levels/LevelOne/LevelOne";
import LevelTwo from "./Pages/Levels/LevelTwo/LevelTwo";
import LevelThree from "./Pages/Levels/LevelThree/LevelThree";
import axios from "axios";
import ControlBallons from "./Pages/Menu/ControlBallons";

function App() {
  const [userName, setUserName] = useState("")
  const [userSurname, setUserSurname] = useState("")
  const [pointsCount, setPointCount] = useState(0);
  const [questions, setQuestions] = useState();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [level, setLevel] = useState("levelOne")
  const audioRef = useRef();
  async function fetchLevelOneQuestions() {
    const response = await axios.get(
      "https://6388cd90a4bb27a7f79225cb.mockapi.io/quizz/questions"
    );
    setQuestions(response.data[questionNumber]);

  }
  useEffect(() => {
    if (questions) {
      setTimeout(() => {
        fetchLevelOneQuestions();
      }, 500);
    }
    else {
      fetchLevelOneQuestions();
    }
  }, [questionNumber]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home userName={userName} userSurname={userSurname}
          setUserName={setUserName} setUserSurname={setUserSurname} />} />
        <Route path="/menu" element={<Menu setLevel={setLevel} audioRef={audioRef}/>} />
        <Route path="/first-level" element={<LevelOne pointsCount={pointsCount} setPointCount={setPointCount} questions={questions} setQuestions={setQuestions} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}
          level={level}
          setLevel={setLevel}

        />} />
        <Route path="/second-level" element={<LevelTwo pointsCount={pointsCount} setPointCount={setPointCount} questions={questions} setQuestions={setQuestions} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}
          level={level}
          setLevel={setLevel} />} />
        <Route path="/third-level" element={<LevelThree pointsCount={pointsCount} setPointCount={setPointCount} questions={questions} setQuestions={setQuestions} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}
          level={level}
          setLevel={setLevel} userName={userName}
          userSurname={userSurname} />} />
      </Routes>
      <ControlBallons audioRef={audioRef}/>
    </>
  );
}

export default App;
