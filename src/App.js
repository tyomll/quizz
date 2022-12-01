import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Game from "./Pages/Game/Game";



function App() {
  const [userName, setUserName] = useState("")
  const [userSurname, setUserSurname] = useState("")
  return (
    <>
      <Routes>
        <Route path="/" element={<Home userName={userName} userSurname={userSurname}
          setUserName={setUserName} setUserSurname={setUserSurname} />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
