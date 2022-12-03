import React from 'react'
import { Link } from 'react-router-dom'
import "./LevelTwoEnd.css"
const LevelTwoEnd = () => {
  return (
    <div className='level-two-end-wrapper'>
      <div className='level-two-end-container'>
        <Link to="/third-level" >
          <img className='level-two-end-baloon' src={require("../../../../images/toThirdLevelBaloon.png")} />
        </Link>
        <div className='level-two-heading'>
          <h1>Շնորհավորում ենք․ <br></br>
            Դուք ՀԱՋՈՂՈՒԹՅԱՄԲ ԱՎԱՐՏԵԼ ԵՔ <br></br>ԵՐԿՐՈՐԴ ՓՈՒԼԸ
          </h1>
        </div>
      </div>
    </div>
  )
}

export default LevelTwoEnd