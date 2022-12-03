import React from 'react'
import "./LevelThreeEnd.css"
const LevelThreeEnd = ({ userName,userSurname }) => {
  return (
    <div className='level-three-end-wrapper'>
      <div className='level-three-end-container'>
        <div className='level-three-heading'>
          <h1>ՀԱՎԱՍՏԱԳԻՐ</h1>
        </div>
        <span>Տրվում է {userName} {" "} {userSurname} - ին ՄեդիաԶենք խաղին մասնակցելու և իրազեկվելու համար</span>
        <img src={require("../../../../images/logo.png")}/>
      </div>
    </div>
  )
}

export default LevelThreeEnd