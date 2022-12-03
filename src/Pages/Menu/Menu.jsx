import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import ControlBallons from "./ControlBallons";

const Menu = ({setLevel}) => {
  return (
    <div className="menu-page-wrapper">
      <div className="menu-page-container">
        <ControlBallons/>
        <div className="levels">
          <Link to="/first-level" onClick={() => setLevel("levelOne")}>
            <img
              className="level-one-ballon"
              src={require("../../images/levelOne.png")}
            />
          </Link>
          <Link to="/second-level"  onClick={() => setLevel("levelTwo")}>
            <img
              className="level-two-ballon"
              src={require("../../images/levelTwo.png")}
            />
          </Link>
          <Link to="/third-level"  onClick={() => setLevel("levelThree")}>
            <img
              className="level-three-ballon"
              src={require("../../images/levelThree.png")}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
