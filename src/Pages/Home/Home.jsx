import { Link , useNavigate} from "react-router-dom";
import swal from 'sweetalert';
import { useState } from "react";
import "./Home.css";

const Home = ({ userName, userSurname, setUserName, setUserSurname }) => {
  const [isStartClicked, setIsStartClicked] = useState(false);
  const navigate = useNavigate()
  function NavigateToGame() {
    if(userName.trim() !== "" && userSurname.trim() !== ""){
      navigate("/menu")
    }
    else{
      swal("Ուպս", "Լրացրեք բոլոր դաշտերը", "error");
    }
  }
  const startMode = (
    <div className="home-page-wrapper">
      <div className="home-page-container">
        <h1 className="home-page-heading">
          ԶԻՆՎԵՆՔ, <br></br>
          <span>ՈՐ ԶԻՆԵՆՔ</span>
        </h1>
        <img
          className="home-page-start-btn"
          src={require("../../images/startBtn.png")}
          onClick={() => {
            setIsStartClicked(true);
          }}
        />
      </div>
    </div>
  );
  const registrationMode = (
    <div className="home-registration-page-wrapper">
      <div className="home-page-registration-container">
        <h1 className="home-page-registration-heading">
          Մուտքագրեք ձեր տվյալները
        </h1>
        <div className="home-page-registration-inputs">
          <input
            type="text"
            placeholder="Անուն․․․"
            onChange={(e) => {
              setUserName(e.target.value.trim());
            }}
          />
          <input
            type="text"
            placeholder="Ազգանուն․․․"
            onChange={(e) => {
              setUserSurname(e.target.value.trim());
            }}
          />

          <button onClick={() => NavigateToGame()}>Հաստատել</button>
        </div>
      </div>
    </div>
  );
  return isStartClicked ? registrationMode : startMode;
};

export default Home;
