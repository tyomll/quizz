import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu-page-wrapper">
        <div className="menu-page-container">
            <div className="control-ballons">
                <img className= "menu-ballon" src={require("../../images/menuBallon.png")} />
                <img className= "settings-ballon" src={require("../../images/settingsBallon.png")} />
                <img className= "sound-ballon" src={require("../../images/soundBallon.png")} />
            </div>
            <div className="levels">
                <img className= "level-one-ballon" src={require("../../images/levelOne.png")} />
                <img className= "level-two-ballon" src={require("../../images/levelTwo.png")} />
                <img className= "level-three-ballon" src={require("../../images/levelThree.png")} />
            </div>
        </div>
    </div>
    )
};

export default Menu;
