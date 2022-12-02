import React from "react";
import { Link } from "react-router-dom";

const ControlBallons = () => {
  return (
    <div className="control-ballons">
      <Link to="/menu">
        <img
          className="menu-ballon"
          src={require("../../images/menuBallon.png")}
        />
      </Link>
      <img
        className="settings-ballon"
        src={require("../../images/settingsBallon.png")}
      />
      <img
        className="sound-ballon"
        src={require("../../images/soundBallon.png")}
      />
    </div>
  );
};

export default ControlBallons;
