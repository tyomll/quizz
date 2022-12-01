import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page-wrapper">
      <div className="home-page-container">
        <Link to ="/game">
          <button className="home-page-start-btn">Start</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
