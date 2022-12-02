import ControlBallons from "../../Menu/ControlBallons";
import QuestionList from "../QuestionList/QuestionList";
import "./LevelOne.css";

const LevelOne = ({
  pointsCount,
  setPointCount,
  questions,
  setQuestions,
  questionNumber,
  setQuestionNumber,
}) => {
  return (
    <div className="level-one-wrapper">
      <ControlBallons className="level-one-control-ballons" />
      <div className="level-one-container">
        <div className="level-one-points">
          <span>{pointsCount}</span>
        </div>
        <QuestionList
          pointsCount={pointsCount}
          setPointCount={setPointCount}
          questions={questions}
          setQuestions={setQuestions}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
        />
      </div>
    </div>
  );
};

export default LevelOne;
