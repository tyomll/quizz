import React from 'react'
import "./LevelOneEnd.css"
import { Link } from 'react-router-dom'
const LevelOneEnd = () => {
  return (
    <div className='level-one-end-wrapper'>
      <div className='level-one-end-container'>
        <Link to = "/second-level" >
          <img className='to-second-level' src={require("../../../../images/toSecondLevelBallon.png")} />
        </Link>
      </div>
    </div>
  )
}

export default LevelOneEnd