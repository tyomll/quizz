import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Game from "./Pages/Game/Game";


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game/>} />
      </Routes>
    </>
  );
}

export default App;
