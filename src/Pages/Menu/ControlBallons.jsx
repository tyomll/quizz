import React, { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ControlBallons.css"
const ControlBallons = ({ audioRef }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className="control-ballons">
      <Link to="/menu">
        <img
          className="menu-ballon"
          src={require("../../images/menuBallon.png")}
        />
      </Link>
      <audio
        controls="controls"
        preload="auto"
        autobuffer="true"
        style={{ display: "none" }}
        ref={audioRef}
      >
        <source src={require("../../audio/song.mp3")} />
      </audio>
      {/* <img
        className="settings-ballon"
        src={require("../../images/settingsBallon.png")}
      /> */}
      <img
        className="sound-ballon"
        src={isPlaying ? require("../../images/soundBallonClicked.png") : require("../../images/soundBallon.png")}
        onClick={() => { 
          
          if(!isPlaying) {
            setIsPlaying(!isPlaying)
            audioRef.current.play() 
          }
          if(isPlaying) {
            setIsPlaying(!isPlaying)
            audioRef.current.pause()
          }
        }}
      />
    </div>
  );
};

export default ControlBallons;
